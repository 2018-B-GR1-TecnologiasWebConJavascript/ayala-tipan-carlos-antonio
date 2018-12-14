import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  usuarios: UsuarioInterface[] = [
    {
      id: 1,
      nombre: 'Carlos'
    },
    {
      id: 2,
      nombre: 'Ayala'
    }
  ];

  registroActual = 3; // RECNUM -> Record Number

  constructor() { }

  crear(nuevoUsuario: UsuarioInterface): UsuarioInterface {

    nuevoUsuario.id = this.registroActual;
    this.usuarios.push(nuevoUsuario);
    this.registroActual++;

    return nuevoUsuario;
  }

  eliminar(id: number) {
    const indiceUsuario = this.usuarios
      .findIndex(
        (usuario) => {
          return usuario.id === id;
        }
      );

    const usuarioBorrado = JSON.parse(
      JSON.stringify(this.usuarios[indiceUsuario])
    );

    this.usuarios.splice(indiceUsuario, 1);

    return usuarioBorrado;
  }

  actualizar(id: number, usuarioActualizado: UsuarioInterface) {

    const indiceUsuario = this.usuarios
      .findIndex(
        (usuario) => {
          return usuario.id === id;
        }
      );

    this.usuarios[indiceUsuario] = usuarioActualizado;

    return usuarioActualizado;
  }

  buscarPorId(id:number) {
    return this.usuarios
      .find((usuario)=> usuario.id ===id);
  }

}




export interface UsuarioInterface {
  nombre?: string;
  id?: number;
}
