// encontrara los dos primeros divisores de un numero dado.
const numero = 10
let x = 0

for ( let i = 0 ; i <= numero; i++) {
    if ( x < 2) {
        if ( (numero % i) == 0) {
        console.log(`${i} es un divisor de ${numero}`);
        x++;
    }
    }
}