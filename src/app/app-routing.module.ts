import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { RaiderPageComponent } from './raider-page/raider-page.component';
import { RosterPageComponent } from './roster-page/roster-page.component';
import { ItemGroupPageComponent } from './item-group-page/item-group-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'roster',
    component: RosterPageComponent,
  },
  {
    path: 'item/:id',
    component: ItemPageComponent,
  },
  {
    path: 'item-group/:itemGroupName',
    component: ItemGroupPageComponent,
  },
  {
    path: 'raider/:name',
    component: RaiderPageComponent,
  },
  {
    path: 'zone',
    loadChildren: () => import('./zone/zone.module').then((m) => m.ZoneModule),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./statistics/statistics.module').then((m) => m.StatisticsModule),
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
