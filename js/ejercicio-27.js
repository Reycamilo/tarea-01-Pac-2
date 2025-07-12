/**27. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
solo los números pares, pista: utilizar reduce(). */

let arreglo = [1,2,3,4,5]

function arregloPares(n) {
    return n.reduce(function(bolsa,i) {
        if( i % 2 === 0) {
            bolsa.push(i)
        }
        return bolsa;
    },[])
}

let arregloFinal = arregloPares(arreglo)

console.log(arregloFinal);


