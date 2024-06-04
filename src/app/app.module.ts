import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LootListComponent } from './loot-list/loot-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemPageComponent } from './item-page/item-page.component';
import { RaiderPageComponent } from './raider-page/raider-page.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RosterPageComponent } from './roster-page/roster-page.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LootListComponent,
    ItemPageComponent,
    RaiderPageComponent,
    RosterPageComponent,
    AdminPageComponent,
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
    SweetAlert2Module.forRoot(),
    SharedComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
