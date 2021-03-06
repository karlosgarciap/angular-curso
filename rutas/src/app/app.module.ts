import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

// Services
import { ServicesService } from './services/services.service';

// Routes
import { APP_ROUTING } from './app-routing.module';
import { ServicioComponent } from './components/servicio/servicio.component';
import { FinderComponent } from './components/shared/finder/finder.component';
import { ServicioCardComponent } from './components/servicio-card/servicio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ServicioComponent,
    FinderComponent,
    ServicioCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
