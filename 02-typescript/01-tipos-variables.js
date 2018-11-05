// 01-tipo-variables.ts
var edad = 13;
edad = 25;
edad = 'Nombre';
var variableLoca = '';
variableLoca = false;
var nombre = 'Carlos';
// duck typing -->  // además no es necesario poner le tipado el lenguaje ya sabe la variable, typescript ya deduce cual es el tipo de variable
//nombre = 13;
var casado = false;
casado = true;
casado = false;
casado = null;
casado = undefined;
var carlos = {
    nombre: 'Carlos',
    apellido: 'Ayala'
};
console.log(carlos); // undefined
var numeros = [1, 2, 3, 4];
var fechaNacimiento = new Date();
/*
let promesa:Promise<number> = () => { return new Promise((resolve,reject)=> {
    resolve(1);
}
);
};
*/
function saludar(nombre, // parametros requeridos
apellido) {
    var otrosNombres = []; /// parametros infinitos
    for (var _i = 2 /// parametros infinitos
    ; _i < arguments.length /// parametros infinitos
    ; _i++ /// parametros infinitos
    ) {
        otrosNombres[_i - 2] = arguments[_i]; /// parametros infinitos
    }
    return 'Hola';
}
var respuestaSaludar = saludar('Carlos', 'Ayala', '', '', '', '');
// casteo de datos
function saludar2(nombre, // parametros requeridos
apellido) {
    var otrosNombres = []; /// parametros infinitos
    for (var _i = 2 /// parametros infinitos
    ; _i < arguments.length /// parametros infinitos
    ; _i++ /// parametros infinitos
    ) {
        otrosNombres[_i - 2] = arguments[_i]; /// parametros infinitos
    }
    return 'Hola';
}
var respuestaSaludar2 = saludar2('Carlos', 'Ayala', '', '', '', '');
respuestaSaludar2 = 1;
// casteo de uno o el otro
function saludar3(nombre, // parametros requeridos
apellido) {
    var otrosNombres = []; /// parametros infinitos
    for (var _i = 2 /// parametros infinitos
    ; _i < arguments.length /// parametros infinitos
    ; _i++ /// parametros infinitos
    ) {
        otrosNombres[_i - 2] = arguments[_i]; /// parametros infinitos
    }
    return 'Hola';
}
var respuestaSaludar3 = saludar2('Carlos', 'Ayala', '', '', '', '');
respuestaSaludar3 = 1;
var saludo = function (nombre) {
    return 1;
};
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    Usuario.prototype.saludar = function (nombre) {
        return nombre;
    };
    return Usuario;
}());
var carlosInstancia = new Usuario();
var UsuarioDummy = /** @class */ (function () {
    function UsuarioDummy() {
    }
    return UsuarioDummy;
}());
var carlos2 = {
    nombre: 'Carlos',
    apellido: 'Ayala'
};
