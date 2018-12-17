/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// http://localhost:1337/Raza/holaMundo         ----- para acceder

module.exports = {

  holaMundo: (peticion, respuesta) => {
    return respuesta.send('ok')
  }
  

};

// ESTANDAR RESTFULL
// MODELO: Raza

// Find ->
// http://localhost:1337/Raza
// METODO HTTP: GET

// Create ->
// http://localhost:1337/Raza
// METODO HTTP: POST
// Parametros

// Update ->
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/1
// METODO HTTP: PUT
// Parametros

// Delete ->
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/1
// METODO HTTP: DELETE

// Find One ->
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/1
// METODO HTTP: GET

// Query Params
// AL FINAL DEL URL
// ? Empieza
// & Se separa
// http://localhost:1337/Raza?nombre=Carlos&apellido=Ayala
// TODOS LOS METODOS HTTP

// Route Params
// Dinamicos
// http://localhost:1337/Raza/1/casa/2/cuarto/13
// TODOS LOS METODOS HTTP

// Forms Params (Body Params)
// TODOS LOS METODOS HTTP EXCEPTO! METODO GET!!!
// JS
// <form>
//  <input type="text" name="nombre" value="Carlos"
//  <input type="text" name="apellido" value="Ayala"
// </ form>

// Codigos de estado -> status code
// 1XX -> informacion
// 2XX -> exito
// 3XX -> redireccion
// 4XX -> error del cliente
// 5XX -> error del servidor
