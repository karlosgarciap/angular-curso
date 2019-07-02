import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioComponent } from './components/servicio/servicio.component';

const routes: Routes = [];

const APP_ROUTES: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent },
  
  // path for display single product by Id
  { path: 'servicio/:id', component: ServicioComponent },
  { path: 'busqueda/:servicio', component: ServiciosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
