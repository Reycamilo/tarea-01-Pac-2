// Crear un programa que determine si un número introducido en un Prompt es par o
// no, la respuesta será mostrada en la consola.

let numero = prompt('Ingrese un numero :')
numero = Number(numero)

if ( ( numero % 2) === 0 ) {
    console.log(`El numero ${numero} es par.`);
    
} else {
    console.log(`El numero ${numero} no es par.`);

}