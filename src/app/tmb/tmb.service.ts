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
import { bn } from 'date-fns/locale';

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
    tap((raiders: Raider[]) => this.checkNewData(raiders)),
    map((raiders: Raider[]) => this.processRaiders(raiders)),
    shareReplay(1)
  );

  constructor(private http: HttpClient, private cacheService: CacheService) {}

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
      const items = opts.wishList.filter((i) => i.item_id == itemId);
      if (items.length > restrictions.allowedRankings) {
        const msg = `(${restrictions.ITEM_NAME} - ${itemId}) too many items listed: ${items.length} > ${restrictions.allowedRankings}`;
        errors.push(msg);
        !opts?.quiet && console.error(msg);
      }
    }

    return errors;
  }

  private processRaiders(tmbData: Raider[]) {
    // Process the raw data
    const processed = tmbData.map((raider) => {
      /**
       * attendance_percentage is provided by TMB. This is based on the raid credit the raider has been given over the configured period from TMB settings.
       * Each raid is worth a maximum of 1 point, which will be modified by the attendance percentage. For example, if I've attended 10 raids with 0.75%
       * attendance_percentage, my attendance_points would be 7.5.
       *
       * There is a maximum attendance points which can be different from the value provided by 100% attendance over the full period. This allows for
       * forgiveness of a certain number of absences or tardies. For example, `maxAttendancePoints` value of 18.5 with a 10-week rolling period means
       * that a raider can miss 1 raid and be tardy for 1 raid before they fall behind.
       */
      raider.attendance_points =
        Math.round((raider.attendance_percentage * raider.raid_count) / 0.5) *
        0.5;
      if (raider.attendance_points > environment.maxAttendancePoints) {
        raider.attendance_points = environment.maxAttendancePoints;
      }
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
          raider.public_note = `${
            raider.public_note || ''
          }\r\n${validationResults.join('; ')}`;
          w.pivot.note = validationResults.join('; ');
        }

        return w;
      });

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
      const itemsToAdd = uniqBy(
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
      raider.eligible_loot = [...raider.eligible_loot, ...itemsToAdd];
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
