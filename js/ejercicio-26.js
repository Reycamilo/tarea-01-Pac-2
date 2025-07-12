/**
 * 26. El usuario ingresa un string con varias palabras separadas por coma en un popup y se
deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).
 */

let frase = prompt('ingrese los numeros separados por una coma (,) : ')

frase = frase.split(',')

let arregloNumero = frase.map((i) => {
    return Number(i)
})

console.log(arregloNumero);

