import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import flatten from 'lodash-es/flatten';
import uniqBy from 'lodash-es/uniqBy';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CacheService } from '../cache/cache.service';
import { sha256 } from '../util';
import { Raider, WishlistItem } from './models/tmb.interface';
import { ITEM_RESTRICTIONS } from './item-restrictions';
import { Class, parseClass } from '../loot-list/models/class.model';
import { weaponSlots } from './models/item.interface';
import chunk from 'lodash-es/chunk';
import { ItemService } from './item.service';
import { StateService } from '../state/state.service';

type TmbShaCache = {
  date: string;
  sha: string;
};

/**
 * Process ThatsMyBis data.
 */
@Injectable({
  providedIn: 'root',
})
export class TmbService {
  private refresh$ = new BehaviorSubject<void>(undefined);
  raiders$: Observable<Raider[]> = this.refresh$.pipe(
    switchMap(() =>
      this.http.get('assets/tmb-data.json', {
        headers: new HttpHeaders({
          'Cache-Control':
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
          Pragma: 'no-cache',
          Expires: '0',
        }),
      })
    ),
    // Filter out alts and other characters in the system which do not belong to the main raid roster.
    map((raiders: Raider[]) =>
      raiders.filter((r) => r.is_alt === 0 && r.raid_group_id > 0)
    ),
    tap((raiders: Raider[]) => this.checkNewData(raiders)),
    map((raiders: Raider[]) => this.processAttendancePoints(raiders)),
    map((raiders: Raider[]) => this.processRaiders(raiders)),
    switchMap((raiders: Raider[]) => this.checkMissingItems(raiders)),
    switchMap((raiders: Raider[]) => this.addUnlistedItems(raiders)),
    // Finally, save the raiders onto the state
    tap((raiders) => this.state.setState({ raiders })),
    shareReplay(1)
  );

  constructor(
    private http: HttpClient,
    private cacheService: CacheService,
    private state: StateService,
    private itemService: ItemService
  ) { }

  getRaiders(): Observable<Raider[]> {
    return this.raiders$;
  }

  getByName(name: string): Observable<Raider> {
    return this.raiders$.pipe(
      map((raiders) =>
        raiders.find(
          (r) => r.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        )
      )
    );
  }

  refresh() {
    this.refresh$.next();
  }

  getItemRestrictions(itemId: string | number) {
    return ITEM_RESTRICTIONS[itemId];
  }

  /**
   * Throws errors into the console if the item is not valid for the provided class
   */
  validateItemRestrictions(
    itemId: string | number,
    cls: Class,
    opts?: {
      wishList?: WishlistItem[];
      quiet?: boolean;
    }
  ) {
    const errors = [];
    const restrictions = this.getItemRestrictions(itemId);
    // If there are no restrictions, just return
    if (!restrictions) {
      return errors;
    }
    // If there are any entries in the allowed classes array, then only those classes may list the item
    if (restrictions.allowedClasses.length) {
      if (!restrictions.allowedClasses.includes(cls)) {
        const msg = `(${restrictions.ITEM_NAME} - ${itemId}) not in allowedClasses: ${cls}`;
        errors.push(msg);
        !opts?.quiet && console.error(msg);
      }
    }
    // If there are any entries in the restricted classes array, only those classes MAY NOT list the item
    if (restrictions.restrictedClasses.length) {
      if (restrictions.restrictedClasses.includes(cls)) {
        const msg = `(${restrictions.ITEM_NAME} - ${itemId}) is in restrictedClasses: ${cls}`;
        errors.push(msg);
        !opts?.quiet && console.error(msg);
      }
    }
    // If a wishlist was provided, check that there aren't too many of this item on the list
    if (opts?.wishList) {
      const wishListItems = opts.wishList.filter((i) => i.item_id == itemId);
      if (wishListItems.length > restrictions.allowedRankings) {
        const msg = `(${restrictions.ITEM_NAME} - ${itemId}) too many items listed: ${wishListItems.length} > ${restrictions.allowedRankings}`;
        errors.push(msg);
        !opts?.quiet && console.error(msg);
      }
    }

    return errors;
  }

  /**
   * Verify the 'Weapon per X' rule on the list.
   * Unused as of Cata launch 5/24/2024
   * @param wishList
   */
  validateWeaponSlots(raider: Raider) {
    let bank = 1;
    // Chunk the items into sizes per the rule
    const sorted = raider.wishlist.sort(
      (a, b) => a.pivot.order - b.pivot.order
    );
    const chunks = chunk(sorted, environment.itemsPerSlotRule);
    // Iterate over each chunk (for example, set of *3* items)
    for (const chunk of chunks) {
      const weapons = chunk.filter((w) =>
        weaponSlots.includes(w.inventory_type)
      );
      const weaponCount = weapons.length;
      // If there are no weapons in this chunk, we get a bank slot
      if (weaponCount == 0) {
        bank++;
      }
      // If there are more than 1 weapon in this chunk, this is only allowed if there is are enough bank slots to spend
      else if (weaponCount > 1) {
        // deduct from the bank: (weaponCount-1) is used here because only the "extra" weapons beyond 1 are bankable
        bank = bank - (weaponCount - 1);
        // If we have no bank, this is a violation and the list is invalid
        if (bank <= 0) {
          const message = `INVALID LIST (TOO MANY WEAPONS: ${weapons
            .map((i) => i.name)
            .join('; ')})`;
          raider.public_note = `${raider.public_note || ''}\r\n${message}`;
          console.error(`${raider.name} - ${message}`);
          weapons.forEach((w) => (w.pivot.note = message));
          // Don't let bank fall negative
          bank = 1;
        }
      }
    }
  }

  checkMissingItems(raiders: Raider[]): Observable<Raider[]> {
    return this.itemService.allItems$.pipe(
      map((allitems) => {
        return raiders.map((raider) => {
          for (const item of raider.wishlist) {
            // Verify that the item is found within the TMB item data (i.e. the person picked a non-raid item, or a 10-man only item)
            const found = allitems.some((i) => i.id === item.item_id);
            if (!found) {
              const msg = `Item not found: (${item.name} - ${item.item_id})`;
              console.error(msg);
              raider.public_note = `${raider.public_note || ''}\r\n${msg}`;
              item.pivot.note = msg;
            }
          }
          return raider;
        });
      })
    );
  }

  addUnlistedItems(raiders: Raider[]): Observable<Raider[]> {
    // Find items which are lootable, but which no one added to their list at all.
    return this.itemService.allItems$.pipe(
      map((allitems) => {
        return raiders.map((raider) => {
          const unlistedItems = uniqBy(
            allitems
              // Only items we currently are raiding
              .filter((i) => environment.currentRaids.includes(i.instance_name))
              // Find items that this raider has not...
              .filter(
                (item) =>
                  // ... wishlisted
                  !raider.wishlist.some(
                    (raiderW) => raiderW.item_id == item.id
                  ) &&
                  // ... received
                  !raider.received.some(
                    (raiderR) => raiderR.item_id == item.id
                  ) &&
                  // and is already eligible for
                  !raider.eligible_loot.some(
                    (raiderE) => raiderE.item_id == item.id
                  )
              )
              // Remove class restricted items
              .filter(
                (item) =>
                  !this.validateItemRestrictions(
                    item.id,
                    parseClass(raider.class),
                    { quiet: true }
                  ).length
              )
              .map((item) => {
                // Update this item with this raider's details
                return {
                  item_id: item.id,
                  name: item.name,
                  instance_name: item.instance_name,

                  ranking_points: 0,
                  // For these unlisted items, the points are equal to the raider's total attendance points
                  raider_points: raider.attendance_points,
                  pivot: {
                    character_id: raider.id,
                    is_received: 0,
                    note: 'Unlisted',
                    is_offspec: 1,
                    order: 99,
                  },
                } as WishlistItem;
              }),
            'item_id'
          );
          raider.eligible_loot = [...raider.eligible_loot, ...unlistedItems];

          return raider;
        });
      })
    );
  }

  private processRaiders(tmbData: Raider[]) {
    // Process the raw data
    const processed = tmbData.map((raider) => {
      // Make sure the wishlist order was sorted
      raider.wishlist = raider.wishlist.sort(
        (a, b) => a.pivot.order - b.pivot.order
      );
      // Validate and re-position OS items if needed
      const osItems = raider.wishlist
        .filter((i) => i.pivot.is_offspec === 1)
        .sort((a, b) => a.pivot.order - b.pivot.order);
      if (osItems.length) {
        // Verify there aren't too many OS items
        if (
          osItems.length >
          environment.wishlistLength - environment.wishlistOffspecCutoff
        ) {
          const osMsg = `${raider.name} - too many OS listed: (${osItems.length})`;
          console.error(osMsg);
          raider.public_note = `${raider.public_note || ''}\r\n${osMsg}`;
          // This is a critical issue, so make it very visible that these items are invalid
          raider.wishlist.forEach(
            (i) => (i.pivot.note = 'INVALID LIST (TOO MANY OS)')
          );
        } else {
          const firstOsItem = osItems[0];
          // Set a special message on the first OS item
          firstOsItem.pivot.note = `(First OS) ${firstOsItem.pivot.note ?? ''}`;
          // If the first OS item comes before the cutoff, move it
          if (firstOsItem.pivot.order <= environment.wishlistOffspecCutoff) {
            const itemsToMove = raider.wishlist.filter(
              (i) => i.pivot.order >= firstOsItem.pivot.order
            );
            // First OS Item order will be set to the cutoff spot (+1)
            let curOsOrder = environment.wishlistOffspecCutoff + 1;
            for (const osItem of itemsToMove) {
              osItem.pivot.order = curOsOrder;
              if (osItem.item_id !== firstOsItem.item_id) {
                osItem.pivot.note = `(OS) ${osItem.pivot.note ?? ''}`;
              }
              curOsOrder++;
            }
            // If any items "fell off" the list (i.e. order > wishlistLength), log an error
            const invalidOsItems = raider.wishlist.filter(
              (i) => i.pivot.order > environment.wishlistLength
            );

            if (invalidOsItems.length) {
              const osMsg = `${raider.name} - first OS item too early on list: (${firstOsItem.name} - ${firstOsItem.item_id})`;
              console.error(osMsg);
              raider.public_note = `${raider.public_note || ''}\r\n${osMsg}`;
              // This is a critical issue, so make it very visible that these items are invalid
              raider.wishlist.forEach(
                (i) => (i.pivot.note = 'INVALID LIST (OS TOO EARLY)')
              );
            }
          }
        }
      }
      // Calculate points and validate the wishlist
      raider.wishlist = raider.wishlist.map((w) => {
        /**
         * A raider's points for an item are as follows: their attendance points (see above) + the position on the list (inverted).
         * For example, at wishlist position 1, if there are a max of 50 items on the list, we take the absolute value of 1 - (50 + 1) to give a score of 50 for the top ranking.
         */
        w.ranking_points = Math.abs(
          w.pivot.order - (environment.wishlistLength + 1)
        );
        w.raider_points = raider.attendance_points + w.ranking_points;

        // Restriction verification
        const validationResults = this.validateItemRestrictions(
          w.item_id,
          parseClass(raider.class),
          { wishList: raider.wishlist }
        );
        if (validationResults.length) {
          console.error(
            `${raider.name} - restricted item: (${w.name} - ${w.item_id})`
          );
          // Stick these errors onto the raider's public note for viewing
          raider.public_note = `${raider.public_note || ''
            }\r\n${validationResults.join('; ')}`;
          w.pivot.note = validationResults.join('; ');
        }

        return w;
      });
      // validate the weapon slots rule
      // this.validateWeaponSlots(raider);

      /**
       * Eligible loot is loot that is wishlisted, but not yet received
       */
      raider.eligible_loot = raider.wishlist.filter(
        (w) => !w.pivot?.is_received
      );

      /**
       * Instantiate date fields
       */
      raider.received = raider.received.map((ri) => {
        ri.pivot.received_at = ri.pivot.received_at
          ? new Date(ri.pivot.received_at)
          : ri.pivot.received_at;
        ri.pivot.created_at = ri.pivot.created_at
          ? new Date(ri.pivot.created_at)
          : ri.pivot.created_at;
        ri.pivot.updated_at = ri.pivot.updated_at
          ? new Date(ri.pivot.updated_at)
          : ri.pivot.updated_at;
        return ri;
      });

      return raider;
    });

    // after the first pass, add all unlisted loot into eligible_loot
    return processed.map((raider) => {
      // De-duplicate
      const otherWishListedItems = uniqBy(
        // Clone these items to avoid mutating wishlists
        cloneDeep(
          // Flatten array of arrays
          flatten(
            processed
              // Ignore this raider
              .filter((r) => r.name !== raider.name)
              // Pick out items from the other raider's wishlist that aren't on this raider's wishlist and which they have not received
              .map((r) =>
                r.wishlist.filter(
                  (w) =>
                    !raider.wishlist.some(
                      (raiderW) => raiderW.item_id == w.item_id
                    ) &&
                    !raider.received.some(
                      (raiderR) => raiderR.item_id == w.item_id
                    )
                )
              )
          )
        ),
        // uniqBy item_id
        'item_id'
      )
        // Remove class restricted items
        .filter(
          (item) =>
            !this.validateItemRestrictions(
              item.item_id,
              parseClass(raider.class),
              { quiet: true }
            ).length
        )
        .map((item) => {
          // Update this item with this raider's details
          return {
            ...item,
            ranking_points: 0,
            // For these unlisted items, the points are equal to the raider's total attendance points
            raider_points: raider.attendance_points,
            pivot: {
              ...item.pivot,
              character_id: raider.id,
              is_received: 0,
              note: 'Unlisted',
              is_offspec: 1,
              order: 99,
            },
          };
        });
      raider.eligible_loot = [...raider.eligible_loot, ...otherWishListedItems];
      return raider;
    });
  }

  private processAttendancePoints(raiders: Raider[]): Raider[] {
    const processedRaiders = raiders.map((raider) => {
      /**
       * attendance_percentage is provided by TMB. This is based on the raid credit the raider has been given over the configured period from TMB settings.
       * Each raid is worth a maximum of 1 point, which will be modified by the attendance percentage. For example, if I've attended 10 raids with 0.75%
       * attendance_percentage, my attendance_points would be 7.5.
       *
       * There is a maximum attendance points which can be different from the value provided by 100% attendance over the full period. This allows for
       * forgiveness of a certain number of absences or tardies. For example, `environment.forgiveness` value of 1.5 with a 10-week rolling period means
       * that a raider can miss 1 raid and be tardy for 1 raid before they fall behind, leaving the maximum attainable attendance_points to be 18.5
       * This maximum calculation takes place in state.service.ts
       */
      raider.attendance_points =
        Math.round((raider.attendance_percentage * raider.raid_count) / 0.5) *
        0.5;

      return raider;
    });
    const maxAttendeeRaider = processedRaiders.sort(
      (a, b) => b.attendance_points - a.attendance_points
    )[0];
    // Maximum attendance points are calculated by taking whichever raider has the most attendance points, and subtracting our forgiveness factor
    let maxAttendancePoints =
      maxAttendeeRaider.attendance_points - environment.forgiveness;
    // If the result is less than 0, peg it to 0
    if (maxAttendancePoints < 0) {
      maxAttendancePoints = 0;
    }
    // Save this calculated state globally
    this.state.setState({ maxAttendancePoints });

    // Finally, peg any raiders over the max, down to the max
    return processedRaiders.map((raider) => {
      if (raider.attendance_points > maxAttendancePoints) {
        raider.attendance_points = maxAttendancePoints;
      }
      return raider;
    });
  }

  /**
   * Compares the retrieved TMB data to our cached hash of the previous TMB data.
   * If they differ, it notifies the user that new data was loaded.
   * Cache the new hash.
   */

  private async checkNewData(raiders: Raider[]) {
    var newSha = await sha256(JSON.stringify(raiders));
    var cachedSha = await this.cacheService.get<TmbShaCache>('_tmbSha');
    var today = new Date();

    // Warn of stale data.
    if (cachedSha && newSha === cachedSha.sha) {
      var daysCached = Math.floor(
        (+today - +new Date(cachedSha.date)) / (1000 * 60 * 60 * 24)
      );
      if (
        // If the cache is ever 5+ days old, warn always
        daysCached > 4 ||
        // if today is thursday and the cache is 1+ days old (it must always be updated after tuesday)
        (today.getDay() == 4 && daysCached > 1)
      ) {
        Swal.fire({
          position: 'top-end',
          toast: true,
          icon: 'warning',
          title: 'The TMB data may be out of date!',
          showConfirmButton: true,
          timer: 15000,
        });
      }
    }
    if (!cachedSha || newSha !== cachedSha.sha) {
      Swal.fire({
        position: 'top-end',
        toast: true,
        icon: 'success',
        title: 'The TMB data was updated!',
        showConfirmButton: false,
        timer: 4000,
      });
      // Cache the new value
      await this.cacheService.set<TmbShaCache>('_tmbSha', {
        date: today.toISOString(),
        sha: newSha,
      });
    }
  }
}
