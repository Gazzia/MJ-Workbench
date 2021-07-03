import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuerredusaleRoutingModule } from './guerredusale-routing.module';
import { GameComponent } from './game/game.component';
import { LairComponent } from './lair/lair.component';


@NgModule({
  declarations: [
    GameComponent,
    LairComponent
  ],
  imports: [
    CommonModule,
    GuerredusaleRoutingModule
  ]
})
export class GuerredusaleModule { }
