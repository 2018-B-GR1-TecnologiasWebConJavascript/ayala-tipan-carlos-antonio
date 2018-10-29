
const fs = require('fs');

function appendFile (nombreArchivo, contenido, callback) {
    // 1) Leer archivo
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
                            callback(undefined,err)
                        } else {
                            // Devolver el contenido
                            callback(contenido)
                        }
                    }
                );
            } else {
                fs.writeFile(
                    nombreArchivo,
                    contenidoLeidoDelArchivo + contenido,
                    (err) => {
                        if (err) {
                            callback(undefined,err)
                        } else {
                            // Devolver el contenido
                            callback(contenidoLeidoDelArchivo + contenido)
                        }
                    }
                )
            }
        }
    );
}

appendFile(
    '06-ejemplo.txt',
    '\nHola amigos',
    (contenido, err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(contenido);
        }

    });