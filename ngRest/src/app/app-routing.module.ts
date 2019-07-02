import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";


const routes: Routes = [];

const APP_ROUTES: Routes = [
    {
        path: 'usuarios',
        component: UsuariosComponent,
        data: { title: 'Listado de usuarios' }
    },
    {
        path: 'usuario/:id',
        component: UsuarioComponent,
        data: { title: 'Usuario' }
    }//,
    //{ path: '**', pathMatch: 'full', redirectTo:'usuario/1' },

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [APP_ROUTING],
    exports: [RouterModule]
})

export class AppRoutingModule { }