import { Component, OnInit } from '@angular/core';
import {UsuarioInterface, UsuarioServiceService} from "../../servicios/usuario-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-ver-detalle-usuario',
  templateUrl: './ruta-ver-detalle-usuario.component.html',
  styleUrls: ['./ruta-ver-detalle-usuario.component.scss']
})
export class RutaVerDetalleUsuarioComponent implements OnInit {

  usuario:UsuarioInterface

  constructor(
    private readonly _usuarioService: UsuarioServiceService,
    private readonly _route: ActivatedRoute, // RouterModule
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._route.params;

    // INICIO
    rutaActiva$
      .subscribe(   // ASYNC
        (parametros) => {
          //console.log(parametros);   // devuelve un JSON con el nombre de la ruta que se puso, por eso sale idUsuario:"1"
          const usuarioEncontrado = this._usuarioService.buscarPorId(+parametros.idUsuario);

          //console.log(usuarioEncontrado);

          this.usuario = usuarioEncontrado;
        }
      );
    // FIN
  }

}
