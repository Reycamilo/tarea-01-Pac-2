/**19. Usando for, crear un programa que determine si un número es perfecto o no, (se dice
que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3). */

// Numero de eleccion
let numero = prompt('Ingrese un numero : ');

numero = parseInt(numero)

let suma = 0

// procesamiento de los divisores del numero.
for (let i = 1; i < numero; i++) {
    if ( (numero % i) === 0) {
        suma += i;
        
    }
}




// verificacion si es o no es 
if ( suma == numero) {
    console.log(`${numero} es un numero perfecto.`);
    
} else {
    console.log('No es un numero perfecto.');
    
}
