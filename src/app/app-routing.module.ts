import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'library'
  },
  { path: 'library', component: LibraryComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'guerredusale',
    pathMatch: 'full',
    redirectTo: 'library'
  },
  {
    path: 'guerredusale',
    loadChildren: () => import('./guerredusale/guerredusale.module').then(m => m.GuerredusaleModule)
  },
  {path: '**', redirectTo: '/library'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
