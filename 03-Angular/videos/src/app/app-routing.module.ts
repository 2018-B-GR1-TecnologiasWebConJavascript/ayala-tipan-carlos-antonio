import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {Ruta404Component} from "./rutas/ruta404/ruta404.component";

const routes: Routes = [
  {
    // NOMBRE
    path: 'inicio',
    // PATH
    component: RutaInicioComponent
  },
  {
    path: 'menu',
    component: RutaMenuComponent
  },
  {
    path: 'perfil',
    component: RutaPerfilComponent
  },
  {
    path: 'no-encontrado',
    component: Ruta404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
