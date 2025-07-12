/**30. Crear una función que tome como parámetro un arreglo de números, retornar el número
menor, si es un número negativo mostrar su valor absoluto. */

let arreglo = [1,2,3,4,5,-7]


function numeroM(arreglo) {
    let min = Math.min(...arreglo); 

    if (min < 0) {
        return Math.abs(min); 
    } else {
        return min; 
    }
}

console.log(numeroM(arreglo));

