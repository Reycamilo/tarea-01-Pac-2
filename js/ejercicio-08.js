// Crear un programa que determine si un número introducido en un Prompt es divisible
// por 5 o no, mostrar el resultado con console.log.

let numero = prompt('Ingrese un numero :')
numero = Number(numero)

if ( ( numero % 5) === 0 ) {
    console.log(`El numero ${numero} es divisible entre 5.`);
    
} else {
    console.log(`El numero ${numero} no es divisible entre 5.`);

}