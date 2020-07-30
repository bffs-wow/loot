import { Component, OnInit, Input } from '@angular/core';
import { Raider } from './models/raider.model';
import { EligibleLoot, LootReceipt } from './models/loot.model';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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

  receivedLoot(loot: EligibleLoot): LootReceipt {
    if (this.raider && loot) {
      return this.raider.receivedLoot.find((l) => l.id === loot.id);
    }
    return null;
  }
}
