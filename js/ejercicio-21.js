/**21. Crear una función que reciba un número entero y muestre un error si el tipo de dato
pasado es de otro tipo. */

let numero = prompt('Ingrese un numero entero:')

numero = Number(numero)

function esNumeroEntero (x) {
    if ( typeof(x) === 'number' && !isNaN(x) && Number.isInteger(x)) {
        return true
    } else {
        return "Eror no es un entero."
        
    }
}  

console.log(esNumeroEntero(numero));
