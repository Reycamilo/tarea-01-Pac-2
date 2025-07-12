/**
 * 31. Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].


 */

let arreglo = [1,2,3,4,5]

function revezDeArreglo(arreglo) {
    return arreglo.slice().reverse();
}

console.log(revezDeArreglo(arreglo));
