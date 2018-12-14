import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaPerfilComponent,
    Ruta404Component,
    RutaLoginComponent,
    RutaMenuComponent
  ],          // Web Components
  imports: [
    BrowserModule,
    AppRoutingModule
  ],               // Módulos
  providers: [],                // Servicios
  bootstrap: [AppComponent]     // Componente principal
})
export class AppModule { }





/*
-> Componente Principal
  <router-outlet></router-outlet>
    -> *Inicio  -> inicio
    -> *Login
    -> *Perfil
    -> *Menu -> menu/
     <router-outlet></router-outlet>
        -> Gestion Usuarios ->
            <router-outlet></router-outlet>
            menu/gestion-usuarios/crear-usuarios
            -> Crear usuarios
            -> Actualizar Usuarios
        -> Gestion Productos
            -> Crear productos
            -> Actualizar productos
    -> *404 -> Not Found
*
* */
