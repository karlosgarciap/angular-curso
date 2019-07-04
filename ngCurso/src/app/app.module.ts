import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING, AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FinderComponent } from './components/finder/finder.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PaisComponent } from './components/pais/pais.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    SearchComponent,
    NavbarComponent,
    FinderComponent,
    SidebarComponent,
    BodyComponent,
    PaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
