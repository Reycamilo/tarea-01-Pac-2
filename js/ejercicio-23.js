/**23. Crear un array vacío, luego generar 20 números al azar y guardarlos en un array. */

let arreglo = []

for( let i = 0; i < 20; i++ ) {
    arreglo[i] = Math.floor(Math.random() * (100 - 0 + 1) + 1 )
}

console.log(arreglo);
