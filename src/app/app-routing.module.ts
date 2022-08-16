import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { RaiderPageComponent } from './raider-page/raider-page.component';
import { RosterPageComponent } from './roster-page/roster-page.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
