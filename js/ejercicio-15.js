/**15. Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
ingresa el usuario en un prompt. */


// Numero de eleccion
let numero = prompt('Ingrese un numero : ');

numero = parseInt(numero)

let x = numero

while ( numero >= 1) {
    console.log(numero);
    numero--
}
