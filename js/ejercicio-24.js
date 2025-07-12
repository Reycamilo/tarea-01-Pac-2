/**24. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
introducido por el usuario a través de un prompt. */

let arreglo = []

let n = Number(prompt('Ingrese la cantidad de nuemeros del arreglo :'))

for ( let i = 0; i < n ; i++) {
    arreglo[i] = Math.floor(Math.random() * (101) + 1)
}

console.log(arreglo);
