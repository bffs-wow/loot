import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SheetInfoComponent } from './loot-list/sheet-info/sheet-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LootFeedComponent } from './loot-feed/loot-feed.component';
import { LootLookupComponent } from './loot-lookup/loot-lookup.component';
import { LootListComponent } from './loot-list/loot-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SheetInfoComponent,
    DashboardComponent,
    LootFeedComponent,
    LootLookupComponent,
    LootListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
