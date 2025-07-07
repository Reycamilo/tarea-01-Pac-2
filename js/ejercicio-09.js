// 9. Crear un programa que determine si un string introducido por un usuario inicia con un
// número o con una letra.

let texto = prompt('Ingrese algun valor : ')

// console.log(typeof(numero));
// console.log(typeof(letra));

console.log(texto);


let primerValor = texto.charAt(0)

if(!isNaN(parseInt(primerValor))){
    console.log(`El primer valor es un numero.`);
    
} else {
    console.log(`El primer valor es un string.`);

}