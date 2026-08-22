import { Injectable } from '@angular/core';

import { map, tap, switchMap, shareReplay } from 'rxjs/operators';
import { Observable, timer, NEVER } from 'rxjs';
import { StateService } from '../state/state.service';
import { ItemService } from '../tmb/item.service';
import groupBy from 'lodash-es/groupBy';
import { CacheService } from '../cache/cache.service';
import Swal from 'sweetalert2';
import { TmbService } from '../tmb/tmb.service';
import { LootGroup } from './models/loot-group.model';
import { LootRanking } from './models/ranking.model';

@Injectable({ providedIn: 'root' })
export class LootListFacadeService {
  allRankedLoot$: Observable<LootRanking[]> = this.state.raiders$.pipe(
    map((raiders) =>
      raiders.reduce((loot: LootRanking[], raider) => {
        const raiderLoot = raider.eligible_loot.map((r) => ({
          item: r,
          raider,
        }));
        return [...loot, ...raiderLoot];
      }, [])
    ),
    shareReplay(1)
  );

  constructor(
    private state: StateService,
    private tmbService: TmbService,
    private itemService: ItemService,
    private cache: CacheService
  ) {
    // ensure initial load of data
    this.tmbService.raiders$.subscribe();

    // Handle Auto Reload
    this.state.autoUpdate$
      .pipe(
        switchMap((autoUpdate) => (autoUpdate ? timer(0, 60000) : NEVER)),
        tap(() => this.reloadData())
      )
      .subscribe();

    // If we are loading the app between 6:00 and 12:00  +/- 1 hr ET (Raid Time)
    const now = new Date();
    if (now.getUTCHours() > 23 || now.getUTCHours() < 5) {
      // Force a fresh data load
      this.reloadData();
    }
  }

  getRankedLootGroups(itemId: number): Observable<LootGroup[]> {
    return this.allRankedLoot$.pipe(
      map((allLoot) => {
        if (!itemId) {
          return [];
        }
        return allLoot.filter((l) => l.item.item_id == itemId);
      }),
      map((rankings) => {
        // build iterable / sortable groups by points
        return this.groupAndSort(rankings);
      })
    );
  }

  getAllRankedLootGroups(): Observable<LootGroup[]> {
    return this.allRankedLoot$.pipe(
      map((rankings) => {
        // build iterable / sortable groups by points
        return this.groupAndSort(rankings);
      })
    );
  }

  /**
   * Takes all eligible loot across all raiders who want an item.
   * Groups by point values and sorts highest to lowest.
   */
  groupAndSort(loot: LootRanking[]): LootGroup[] {
    const itemGroups = groupBy(loot, 'item.item_id');
    const allItemIds = Object.keys(itemGroups);
    // Take each group of loot
    const rankedGroups: LootGroup[] = allItemIds.reduce(
      (lootGroups: LootGroup[], itemId) => {
        const thisGroup = itemGroups[itemId];
        // Group this group by points
        const grouped = groupBy(thisGroup, 'item.raider_points');
        const points = Object.keys(grouped);
        // take each grouping of points, and make a `LootRanking` object from it
        const rankedGroup: LootGroup[] = points
          .map((point) => ({
            points: parseFloat(point),
            rankings: grouped[point],
          }))
          .filter((g) => !isNaN(g.points));
        return [...lootGroups, ...rankedGroup];
      },
      []
    );
    // Finally, sort all of the groups with the highest points on top
    return rankedGroups.sort((a, b) => b.points - a.points);
  }

  reloadData() {
    Swal.fire({
      position: 'top-end',
      toast: true,
      icon: 'info',
      title: 'Reloading...',
      showConfirmButton: false,
      timer: 1500,
    });
    return this.cache.clear(['_tmbSha']).then(() => {
      this.tmbService.refresh();
    });
  }
}
