import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LootFeedComponent } from './loot-feed/loot-feed.component';
import { LootLookupComponent } from './loot-lookup/loot-lookup.component';
import { WowheadTooltipDirective } from './wowhead-tooltips/wowhead-tooltip.directive';
import { ZonePipe } from './zone-pipe/zone.pipe';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LootFeedComponent,
    LootLookupComponent,
    WowheadTooltipDirective,
    ZonePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgSelectModule,
  ],
  exports: [
    LootFeedComponent,
    LootLookupComponent,
    WowheadTooltipDirective,
    ZonePipe,
  ],
})
export class SharedComponentsModule {}
