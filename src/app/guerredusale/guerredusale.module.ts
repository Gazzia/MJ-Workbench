import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuerredusaleRoutingModule } from './guerredusale-routing.module';
import { GuerredusaleComponent } from './guerredusale.component';


@NgModule({
  declarations: [
    GuerredusaleComponent
  ],
  imports: [
    CommonModule,
    GuerredusaleRoutingModule
  ]
})
export class GuerredusaleModule { }
