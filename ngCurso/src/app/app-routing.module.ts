import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DetailComponent} from './components/detail/detail.component';
import {SearchComponent} from "./components/search/search.component";

const routes: Routes = [];

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:paises', component: SearchComponent },
  { path: 'detail/:alpha3Code', component: DetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


@NgModule({
  imports: [APP_ROUTING],
  exports: [RouterModule]
})

export class AppRoutingModule { }
