/**28. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
contenga sólo las palabras que empiezan con una vocal. */

let arreglo1 = ['uva', 'pera', 'arandano','manzana']

function vocal(arreglo) {
    return arreglo.reduce(function(acumulador, palabra) {
        let primeraLetra = palabra[0].toLowerCase();

        if ("aeiou".includes(primeraLetra)) {
            acumulador.push(palabra); 
        }

        return acumulador;
    }, []);
}


let arregloFinal = vocal(arreglo1)

console.log(arregloFinal);


