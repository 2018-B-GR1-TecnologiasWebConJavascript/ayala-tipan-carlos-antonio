
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
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + '\nAdios amigos');
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




// ['A','B','C']

// 0-A.txt    'A'
// 1-B.txt    'B'
// 2-C.txt    'C'

const respuesta = {
    nombreArchivo: '',
    contenidoArchivo: '',
    error: '',
};


function ejercicio(arregloStrings, callback) {

    const respuestas = [];

    arregloStrings
        .forEach(
            (string, indice) => {
                const nombreArchivo = `${indice}-${string}.txt`;
                const contenido = string;
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err) => {
                        const respuesta = {
                            nombreArchivo: nombreArchivo,
                            contenidoArchivo: contenido,
                            error: err,
                        };
                        respuestas.push(respuesta);

                        const estaCompletoElArreglo = respuestas.length === arregloStrings.length;

                        if (estaCompletoElArreglo) {
                            callback(respuestas);
                        }

                    }
                );
            }
        )

    /*
        // SCOPES
        for (let i = 0; i < arregloStrings.length; i++) {
            fs.writeFile(
                `${i}-${arregloStrings[i]}.txt`,
                arregloStrings[i],
                (err)=>{
                    const respuesta = {
                        nombreArchivo: `${i}-${arregloStrings[i]}.txt`,
                        contenidoArchivo: arregloStrings[i],
                        error: err,
                    };
                    respuestas.push(respuesta);
                    const estaCompletoElArreglo = respuestas.length === arregloStrings.length;
                    if (estaCompletoElArreglo) {
                        callback(respuestas);
                    }
                }
            );
        }
    */

}


ejercicio(
    ['A', 'B', 'C'],
    (respuestaEjercicio) => {
        console.log(respuestaEjercicio);
    }
);



// ejercicio en clase
const appendFile2 = (nombreArchivo, contenido) => {
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
                                    reject(err)
                                } else {
                                    // Devolver el contenido
                                    resolve(contenido);
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
                                    resolve(contenido)
                                }
                            }
                        )
                    }
                }
            );
        }
    )
}

appendFile2('07-ejemplo3.txt',
    '\nHola amigos2')
    .then(
        (contenido) => {
            console.log(contenido);
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );