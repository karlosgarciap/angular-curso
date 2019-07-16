import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SpotifyService} from './services/spotify.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import {APP_ROUTING} from './app-routing.module';
import { ArtistComponent } from './components/artist/artist.component';
import { ToptracksComponent } from './components/toptracks/toptracks.component';
import { NoImagePipe } from './pipes/no-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistComponent,
    ToptracksComponent,
    NoImagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
    APP_ROUTING
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
