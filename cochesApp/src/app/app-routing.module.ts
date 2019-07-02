import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsListComponent} from './components/cars-list/cars-list.component';

const routes: Routes = [];

const APP_ROUTES: Routes = [
  { path: 'home', component: CarsListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


@NgModule({
  imports: [APP_ROUTING],
  exports: [RouterModule]
})

export class AppRoutingModule { }
