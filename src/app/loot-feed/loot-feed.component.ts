import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LootReceipt } from '../loot-list/models/loot.model';
import orderBy from 'lodash-es/orderBy';
import take from 'lodash-es/take';

@Component({
  selector: 'app-loot-feed',
  templateUrl: './loot-feed.component.html',
  styleUrls: ['./loot-feed.component.scss'],
})
export class LootFeedComponent implements OnInit {
  recentLoot$: Observable<LootReceipt[]> = this.state.raiders$.pipe(
    map((raiders) => raiders.reduce((loot, raider) => {
      const raiderLoot = raider.receivedLoot.map(r => ({
        ...r,
        raiderName: raider.name
      }))
      return [...loot, ...raiderLoot];
    }, [])),
    map((loot: LootReceipt[]) => loot.sort((a, b)  => {
      return +b.date - +a.date;
    })),
    map(ordered => take(ordered, 25))
  );

  constructor(private state: StateService) {}

  ngOnInit(): void {}
}
