import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';

import take from 'lodash-es/take';
import { StateService } from 'src/app/state/state.service';
import { ReceivedItem } from 'src/app/tmb/models/tmb.interface';
import { ZoneService } from 'src/app/zone/zone.service';
import { LootReceipt } from 'src/app/loot-list/models/loot-receipt.model';
import { CsvItem } from 'src/app/tmb/models/item.interface';
import { ItemService } from 'src/app/tmb/item.service';
import { Zone } from 'src/app/zone/zone.interface';

@Component({
  selector: 'app-loot-feed',
  templateUrl: './loot-feed.component.html',
  styleUrls: ['./loot-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LootFeedComponent implements OnInit, OnChanges {
  @Input() zone: Zone = null;
  @Input() source: string = null;
  private _filters = new BehaviorSubject({
    zone: this.zone,
    source: this.source,
  });
  recentLoot$: Observable<LootReceipt[]> = combineLatest([
    this.state.raiders$,
    this.itemService.allItems$,
    this._filters.asObservable(),
  ]).pipe(
    map(([raiders, allItems, filters]) =>
      raiders
        .reduce(
          (loot: (LootReceipt & { itemWithSource?: CsvItem })[], raider) => {
            const raiderLoot = raider.received.map((r) => ({
              item: r,
              itemWithSource: allItems.find((i) => i.id == r.item_id),
              raider,
            }));
            return [...loot, ...raiderLoot];
          },
          []
        )
        // apply filters
        .filter((ri: LootReceipt & { itemWithSource?: CsvItem }) => {
          let match = true;
          if (filters.source && filters.source !== 'All') {
            match = ri.itemWithSource?.source_name === filters.source;
          }
          if (filters.zone) {
            match =
              match && ri.itemWithSource?.instance_name === filters.zone.name;
          }
          return match;
        })
    ),
    map((loot: (LootReceipt & { itemWithSource?: CsvItem })[]) =>
      loot.sort((a, b) => {
        return +b.item.pivot.received_at - +a.item.pivot.received_at;
      })
    ),
    map((ordered) => take(ordered, 25)),
    map((top25) =>
      top25.sort((a, b) => {
        // If the drop was on the same date, sort by boss ordering instead
        if (+b.item.pivot.received_at === +a.item.pivot.received_at) {
          const aOrder = this.zoneService.getSourceOrdering(
            a.itemWithSource?.source_name
          );
          const bOrder = this.zoneService.getSourceOrdering(
            b.itemWithSource?.source_name
          );
          return bOrder - aOrder;
        }
        return 0;
      })
    )
  );

  constructor(
    private state: StateService,
    private zoneService: ZoneService,
    protected itemService: ItemService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.zone || changes.source) {
      this._filters.next({
        zone: this.zone,
        source: this.source,
      });
    }
  }
}
