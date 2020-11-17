import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZonePageComponent } from './zone-page/zone-page.component';

const routes: Routes = [{ path: ':slug', component: ZonePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoneRoutingModule {}
