import { Component, Input, OnChanges } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { itemGroups } from './item-groups';
import { ItemService } from '../tmb/item.service';
import { map, switchMap } from 'rxjs/operators';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { LootListFacadeService } from '../loot-list/loot-list.facade';
import flatten from 'lodash-es/flatten';
import { LootGroup } from '../loot-list/models/loot-group.model';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import uniq from 'lodash-es/uniq';

@Component({
  selector: 'app-item-group-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, SharedComponentsModule, FaIconComponent, RouterLink],
  templateUrl: './item-group-page.component.html',
  styleUrl: './item-group-page.component.scss'
})
export class ItemGroupPageComponent implements OnChanges {
  faExternalLinkAlt = faExternalLinkAlt;
  @Input() itemGroupName: string;
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
        const found = {};
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
    't11-heroic-tokens': "T11 Heroic Tokens"
  }
  constructor(protected itemService: ItemService, private lootListFacade: LootListFacadeService,
  ) { }

  ngOnChanges(changes) {
    this.itemGroupItemIds$.next(itemGroups[this.itemGroupName] || []);
  }

  getPointGroups(points: number, groups: LootGroup[]) {
    return groups.filter(g => g.points === points)
  }
}
