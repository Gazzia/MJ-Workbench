import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuerredusaleRoutingModule } from './guerredusale-routing.module';
import { GuerredusaleComponent } from './guerredusale.component';
import { GameComponent } from './game/game.component';
import { LairComponent } from './lair/lair.component';


@NgModule({
  declarations: [
    GuerredusaleComponent,
    GameComponent,
    LairComponent
  ],
  imports: [
    CommonModule,
    GuerredusaleRoutingModule
  ]
})
export class GuerredusaleModule { }
