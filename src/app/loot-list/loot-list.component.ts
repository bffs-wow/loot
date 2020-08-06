import { Component, OnInit, Input } from '@angular/core';
import { Raider } from './models/raider.model';
import {  LootReceipt } from './models/loot.model';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Ranking } from './models/ranking.model';

@Component({
  selector: 'app-loot-list',
  templateUrl: './loot-list.component.html',
  styleUrls: ['./loot-list.component.scss'],
})
export class LootListComponent implements OnInit {
  @Input() raider: Raider;
  @Input() noRouteLink = false;
  faCheck = faCheck;
  constructor() {}

  ngOnInit(): void {}

  receivedLoot(ranking: Ranking): LootReceipt {
    if (this.raider && ranking) {
      return this.raider.receivedLoot.find((l) => l.sheetName === ranking.itemName);
    }
    return null;
  }
}
