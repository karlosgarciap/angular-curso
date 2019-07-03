import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FinderComponent } from './components/finder/finder.component';
import { BodyComponent } from './components/body/body.component';
import { CarComponent } from './components/car/car.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarsService } from './services/cars.service';
import { CarItemComponent } from './components/car-item/car-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FinderComponent,
    BodyComponent,
    CarComponent,
    CarsListComponent,
    CarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
