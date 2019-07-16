import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from "./components/search/search.component";
import {HomeComponent} from "./components/home/home.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {ToptracksComponent} from "./components/toptracks/toptracks.component";

const routes: Routes = [];

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'artist/toptracks/:id', component: ToptracksComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
