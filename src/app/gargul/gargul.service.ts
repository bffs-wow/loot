import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { LootListFacadeService } from '../loot-list/loot-list.facade';
import { GargulExport, WishListEntry } from './gargul-export.interface';
import { deflate } from 'pako';
import { bytesToBase64 } from '../util';

const tierMap = {
  1: 'S',
  2: 'A',
  3: 'B',
  4: 'C',
  5: 'D',
  6: 'F',
};

/**
 * Export data to the Gargul addon.
 */
@Injectable({
  providedIn: 'root',
})
export class GargulService {
  constructor(private lootListFacade: LootListFacadeService) {}

  export(): Observable<GargulExport> {
    const prioOrders = {};
    // Prevent adding huge amounts of data to the export
    const itemRowCounts = {};
    // Only add this many rankings to the in-game tooltip
    const maxItemRowCount = 4;
    return this.lootListFacade.getAllRankedLootGroups().pipe(
      map((lootGroups) => {
        const exp: GargulExport = {
          wishlists: {},
          groups: {},
          loot: '',
          notes: {},
          tiers: {},
        };
        for (const grp of lootGroups) {
          // Group will always have rankings
          const item = grp.rankings[0].item;
          // Populate export objects for this item, if this is the first time we've seen it
          if (!exp.wishlists[item.item_id]) {
            exp.wishlists[item.item_id] = [];
            exp.notes[item.item_id] = '\n';
            prioOrders[item.item_id] = 1;
            itemRowCounts[item.item_id] = 0;
          }
          // If we reached the limit, skip this group
          if (itemRowCounts[item.item_id] >= maxItemRowCount) {
            continue;
          }
          itemRowCounts[item.item_id]++;
          // All rankings in a group are tied, so get the order first
          const order = prioOrders[item.item_id];
          for (const ranking of grp.rankings) {
            // Add raid group to export
            if (ranking.raider.raid_group_id) {
              exp.groups[ranking.raider.raid_group_id] =
                ranking.raider.raid_group_name;
            }
            // Add tier
            if (ranking.item.guild_tier) {
              exp.tiers[ranking.item.item_id] =
                tierMap[ranking.item.guild_tier];
            }

            exp.wishlists[ranking.item.item_id].push(
              this.stringifyWishListEntry({
                characterName: ranking.raider.name,
                itemId: ranking.item.item_id,
                offspec: ranking.item.pivot.is_offspec == 1,
                order,
                raidGroupId: ranking.raider.raid_group_id,
                wishListOrPrio: '1',
              })
            );
          }
          // Increment the order
          prioOrders[item.item_id]++;
          // Add a line to the note
          // If there are 5 or fewer tied raiders at this point level, list them out
          if (grp.rankings.length <= 5) {
            exp.notes[item.item_id] = `${exp.notes[item.item_id]}${grp.rankings
              .map((r) => r.raider.name)
              .join(', ')} (${grp.points} pts)\n`;
          } else {
            // Otherwise, just say too many are tied instead of adding a huge note.
            exp.notes[item.item_id] = `${
              exp.notes[item.item_id]
            }<Many tied, check site!> (${grp.points} pts)\n`;
          }
        }
        return exp;
      }),
      tap((exportObj) => {
        // Gzip the json object
        const deflated = deflate(JSON.stringify(exportObj));
        const b64 = bytesToBase64(deflated);
        // Copy to clipboard
        navigator.clipboard.writeText(b64);

        Swal.fire({
          position: 'top',
          toast: true,
          icon: 'success',
          title: 'Gargul Import Data Copied to Clipboard!',
          text: 'Import in game by typing "/gl tmb"',
          showConfirmButton: false,
          timer: 4000,
        });
      }),
      first()
    );
  }

  private stringifyWishListEntry(wle: WishListEntry) {
    return `${wle.characterName.toLocaleLowerCase()}${
      wle.offspec ? '(OS)' : ''
    }|${wle.order}|${wle.wishListOrPrio}|${wle.raidGroupId || 0}`;
  }
}
