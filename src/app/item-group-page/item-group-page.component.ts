import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, OnChanges, SimpleChanges, input, ChangeDetectionStrategy } from '@angular/core';
import flatten from 'lodash-es/flatten';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LootListFacadeService } from '../loot-list/loot-list.facade';
import { LootGroup } from '../loot-list/models/loot-group.model';
import { LootReceipt } from '../loot-list/models/loot-receipt.model';
import { StateService } from '../state/state.service';
import { ItemService } from '../tmb/item.service';
import { itemGroups } from './item-groups';

import { RouterLink } from '@angular/router';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import uniq from 'lodash-es/uniq';
import { WowheadTooltipDirective } from '../shared-components/wowhead-tooltips/wowhead-tooltip.directive';

@Component({
  selector: 'app-item-group-page',
  imports: [AsyncPipe, WowheadTooltipDirective, RouterLink, DatePipe],
  templateUrl: './item-group-page.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrl: './item-group-page.component.scss'
})
export class ItemGroupPageComponent implements OnChanges {
  faExternalLinkAlt = faExternalLinkAlt;
  recentRecipients$: Observable<LootReceipt[]> = of([]);
  readonly itemGroupName = input<keyof typeof itemGroups>('');
  itemGroupItemIds$ = new BehaviorSubject<number[]>([]);
  items$ = this.itemGroupItemIds$.pipe(
    switchMap(ids => combineLatest(ids.map(id => this.itemService.getById(id))))
  );
  groupRankings$ = combineLatest([this.lootListFacade.allRankedLoot$, this.itemGroupItemIds$])
    .pipe(
      map(([allLoot, itemIds]) => itemIds.map(id => allLoot.filter(l => l.item.item_id === id))),
      map(arrays => flatten(arrays)),
      map(groupRankings => this.lootListFacade.groupAndSort(groupRankings)),
      map(groups => {
        const highestRankedGroups: LootGroup[] = [];
        const rankingPoints: number[] = [];
        for (let group of groups) {
          highestRankedGroups.push(group);
          rankingPoints.push(group.points);
        }
        return {
          points: uniq(rankingPoints),
          highestRankedGroups
        }
      })
    );

  groupTitle = {
    't16-conq-tokens': "T16 Conquest Tokens",
    't16-vanq-tokens': "T16 Vanquisher Tokens",
    't16-prot-tokens': "T16 Protector Tokens",
    'echoes-of-war': "Echoes of War",
  }
  constructor(protected itemService: ItemService, private lootListFacade: LootListFacadeService, private state: StateService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.itemGroupItemIds$.next(itemGroups[this.itemGroupName()] || []);

    this.recentRecipients$ = combineLatest([
      this.itemGroupItemIds$,
      this.state.raiders$,
    ]).pipe(
      switchMap(([itemids, raiders]) => {
        return combineLatest(itemids.map(itemId => {
          return of(raiders.reduce((loot: LootReceipt[], raider) => {
            const raiderLoot = raider.received
              .filter((i) => i.item_id === itemId)
              .map((r) => ({
                item: r,
                raider,
              }));
            return [...loot, ...raiderLoot];
          }, []))
        })).pipe(map(arrays => flatten(arrays)),
          map((loot: LootReceipt[]) =>
            loot.sort((a, b) => {
              return +b.item.pivot.received_at - +a.item.pivot.received_at;
            })
          ))
      })
    );
  }

  getPointGroups(points: number, groups: LootGroup[]) {
    return groups.filter(g => g.points === points)
  }
}
