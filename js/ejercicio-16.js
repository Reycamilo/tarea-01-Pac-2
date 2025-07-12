/**16. Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
tabla del número hasta 12. */


// Numero de eleccion
let numero = prompt('Ingrese un numero : ');

numero = parseInt(numero)

let x = 1;

while ( x <= 12 ) {
    console.log(numero * x);
    x++;
}
