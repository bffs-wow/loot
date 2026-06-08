import { AsyncPipe } from '@angular/common';
import { Component, OnChanges, SimpleChanges, input } from '@angular/core';
import flatten from 'lodash-es/flatten';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LootListFacadeService } from '../loot-list/loot-list.facade';
import { LootGroup } from '../loot-list/models/loot-group.model';
import { ItemService } from '../tmb/item.service';
import { itemGroups } from './item-groups';

import { RouterLink } from '@angular/router';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import uniq from 'lodash-es/uniq';
import { WowheadTooltipDirective } from '../shared-components/wowhead-tooltips/wowhead-tooltip.directive';

@Component({
  selector: 'app-item-group-page',
  imports: [AsyncPipe, WowheadTooltipDirective, RouterLink],
  templateUrl: './item-group-page.component.html',
  styleUrl: './item-group-page.component.scss'
})
export class ItemGroupPageComponent implements OnChanges {
  faExternalLinkAlt = faExternalLinkAlt;
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
        // We are only interested in the highest ranking of each item
        const highestRankedGroups: LootGroup[] = [];
        const rankingPoints: number[] = [];
        const found: { [key: number]: boolean } = {};
        for (let group of groups) {
          const itemId = group.rankings[0].item.item_id;
          if (!found[itemId]) {
            found[itemId] = true;
            highestRankedGroups.push(group);
            rankingPoints.push(group.points);
          }
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
    't16-prot-tokens': "T16 Protector Tokens"
  }
  constructor(protected itemService: ItemService, private lootListFacade: LootListFacadeService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.itemGroupItemIds$.next(itemGroups[this.itemGroupName()] || []);
  }

  getPointGroups(points: number, groups: LootGroup[]) {
    return groups.filter(g => g.points === points)
  }
}
