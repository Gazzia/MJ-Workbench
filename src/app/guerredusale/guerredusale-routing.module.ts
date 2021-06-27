import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuerredusaleComponent } from './guerredusale.component';

const routes: Routes = [{ path: '', component: GuerredusaleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuerredusaleRoutingModule { }
