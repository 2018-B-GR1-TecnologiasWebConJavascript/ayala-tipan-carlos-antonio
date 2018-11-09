// 02-observables.ts
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distintc = require('rxjs/operators').distinct();
const numeros$ = rxjs.of(1, "Carlos", "Carlos", 1, true, true, 1, { nombre: 'Carlos' }, 1, [1, 2, 3], new Date());
console.log(numeros$);
numeros$
    .pipe(distintc(), map((valorActual) => {
    return { data: valorActual };
}))
    /*
    .pipe()
    .pipe()
    .pipe()
    .pipe()
    .pipe()*/
    .subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('Error', error);
}, () => {
    console.log('Completado');
});
