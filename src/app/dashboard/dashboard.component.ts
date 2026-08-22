import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { StateService } from '../state/state.service';
import { AsyncPipe } from '@angular/common';
import { LootListComponent } from '../loot-list/loot-list.component';
import { LootLookupComponent } from '../shared-components/loot-lookup/loot-lookup.component';
import { LootFeedComponent } from '../shared-components/loot-feed/loot-feed.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
    imports: [LootListComponent, LootLookupComponent, LootFeedComponent, AsyncPipe]
})
export class DashboardComponent implements OnInit {
  constructor(public state: StateService) {}

  ngOnInit(): void {}
}
