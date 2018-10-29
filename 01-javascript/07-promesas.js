const fs = require('fs');
const nombre = '06-ejemplo.txt';
const nuevaPromesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (err, contenidoLeidoDelArchivo) => {
                    if (err) {
                        reject(err);
                        console.log('err')
                    } else {
                        resolve(contenidoLeidoDelArchivo);
                        console.log('si')
                    }

                }
            )
        }
    )
};

const nuevaPromesaEscritura = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenidoArchivo);
                    }

                }
            )
        }
    )
};

nuevaPromesa(nombre)
    .then(
        (contenido) => {
            console.log(contenido);
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + 'Adios amigos');
        }
    )
    .then(
        (contenidoArchivoEscrito) => {
            console.log(contenidoArchivoEscrito);
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );




//['A','B','C']
//0-A.txt  'A'
//1-B.txt  'B'
//2-C.txt  'C'
/*
const respuesta={
    nombreArchivo:'',
    contenidoArchivo:'',
    error:'',
};
[respuesta,respuesta,respuesta,respuesta]
function ejercicio(arreglotrings,callback){
    const respuestas=[];
    arreglotrings
        .forEach(
            (string, indice)=>{
                const nombreArchivo=`${indice}-${string}.txt`;
                const contenido = string;
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err)=>{
                        const respuesta={
                            nombreArchivo:nombreArchivo,
                            contenidoArchivo:contenido,
                            error:err,
                        };
                        respuestas.push(respuesta);
                        const estaCompletoArreglo = respuetas.length===arreglotrings.length;
                        if(estaCompletoArreglo){
                            callback(respuestas);
                        }
                    }
                )

            }
        )
}

ejercicio(
    ['A','B','C'],
    (respuetaEjercicio)=>{
        console.log(respuetaEjercicio);
    }
);

*/


// ejercicio en clase

const appendFile = (nombreArchivo, contenido) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoLeidoDelArchivo) => {
                    if (error) {
                        fs.writeFile(
                            nombreArchivo,
                            contenido,
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    // Devolver el contenido
                                    resolve(contenido)
                                }
                            }
                        );
                    } else {
                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeidoDelArchivo + contenido,
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    // Devolver el contenido
                                    resolve(contenidoLeidoDelArchivo + contenido)
                                }
                            }
                        )
                    }
                }
            );
        }
    )

}


appendFile(nombre)
    .then(
        (contenido) => {
            console.log(contenido);
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + 'Adios amigos');
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );

