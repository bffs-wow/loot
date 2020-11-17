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
import { LootReceipt } from 'src/app/loot-list/models/loot.model';
import { StateService } from 'src/app/state/state.service';
import { ZoneService } from 'src/app/wow-data/zone.service';
import { Source } from 'src/app/wow-data/item.interface';

@Component({
  selector: 'app-loot-feed',
  templateUrl: './loot-feed.component.html',
  styleUrls: ['./loot-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LootFeedComponent implements OnInit, OnChanges {
  @Input() zone: number = 0;
  @Input() source: Source = null;
  private _filters = new BehaviorSubject({
    zone: this.zone,
    source: this.source,
  });
  recentLoot$: Observable<LootReceipt[]> = combineLatest([
    this.state.raiders$,
    this._filters.asObservable(),
  ]).pipe(
    map(([raiders, filters]) =>
      raiders
        .reduce((loot, raider) => {
          const raiderLoot = raider.receivedLoot.map((r) => ({
            ...r,
            raiderName: raider.name,
          }));
          return [...loot, ...raiderLoot];
        }, [])
        // apply filters
        .filter((item: LootReceipt) => {
          let match = true;
          if (filters.source && filters.source.name !== 'All') {
            if (filters.source.category === 'Zone Drop') {
              match = item.source.category === filters.source.category;
            } else {
              match = item.source.name === filters.source.name;
            }
          }
          if (filters.zone) {
            match = match && item.source.zone === filters.zone;
          }
          return match;
        })
    ),
    map((loot: LootReceipt[]) =>
      loot.sort((a, b) => {
        // If the drop was on the same date, sort by boss ordering instead
        if (+b.date === +a.date) {
          const aSource = this.zoneService.getItemSource(a);
          const bSource = this.zoneService.getItemSource(b);
          return bSource.bossOrder - aSource.bossOrder;
        }
        return +b.date - +a.date;
      })
    ),
    map((ordered) => take(ordered, 25))
  );

  constructor(private state: StateService, private zoneService: ZoneService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.zone || changes.source) {
      this._filters.next({
        zone: this.zone,
        source: this.source,
      });
    }
  }
}
