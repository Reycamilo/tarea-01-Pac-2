

let array = [1,2,3,4,5,6]

// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.

let i = 0;

while (i < array.length) {

    console.log(array[i]);
    i++
    
}

/**b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
pantalla. */

console.log('**************************************************************************');

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}

/**c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
en pantalla. */
console.log('****************************************************************************');

array.forEach(function (posicion) {
    console.log(posicion);
    
})


/**d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno. */
console.log('**********************************************************************');

array.forEach((posicion) => {
    console.log(posicion + 1);
    
})

/** e. Generar una copia de un array pero con todos los elementos incrementados en 1. */
console.log('***********************************************************************');
let copiaArray = []

array.forEach(function(i) {
    copiaArray.push(i + 1)
})

console.log(copiaArray);


// f. Calcular el promedio */
console.log('******************************************************************************');

let suma = 0

array.forEach((valor) => {
    suma += valor
})

let promedio = (suma) / array.length

console.log(promedio);


