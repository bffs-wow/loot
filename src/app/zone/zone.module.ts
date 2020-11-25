import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonePageComponent } from './zone-page/zone-page.component';
import { ZoneRoutingModule } from './zone-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZonePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgSelectModule,
    ZoneRoutingModule,
    SharedComponentsModule,
  ],
})
export class ZoneModule {}
