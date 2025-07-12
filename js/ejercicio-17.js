/**17. Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
ingresa un usuario. */

// Numero de eleccion
let n = prompt('Ingrese un numero : ');
let m = prompt('Ingrese otro numero : ');

m = parseInt(m)
n = parseInt(n)

let maximo;
let minimo;

// Verificamos el numero menor
if ( n > m) {
    maximo = n
    minimo = m;
} else {
    maximo = m
    minimo = n;
}

// variable contadora
let i = minimo

// variable resultado
let resultado = 0

while( i <= maximo) {
    if ( (i % 2) == 0) {
        console.log(i);
        resultado += i;
    } 
    i++;   
}

console.log(`El resultado de los numeros pares entre ${maximo} y ${minimo} es de : \n${resultado}`);
