/**29. Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
vacío debe devolver cero. */

let arreglo = [1,2,3,4,5]

function promedio(arreglo) {
    if (arreglo.length === 0) {
    return 0;
}
    let suma = arreglo.reduce(function(acum, num) {
    return acum + num;
}, 0);

let promedio = suma / arreglo.length;
return promedio;


}

console.log(promedio(arreglo));
