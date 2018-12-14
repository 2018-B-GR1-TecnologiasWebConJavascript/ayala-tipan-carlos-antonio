import {Component, OnInit} from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios = [];

  // Inyección de Dependencias
  constructor(
    private readonly _usuarioService:UsuarioServiceService
  ) {

  }

  ngOnInit() {
    this._usuarioService.usuarios;
  }

  // hola() {
  //   return 'Hola';
  // }

  eliminar(usuario) {
    this._usuarioService.eliminar(usuario.id);


  }

}

interface Usuario {
  nombre?: string;
  id?: number;
}

