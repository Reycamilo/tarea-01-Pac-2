/** 13. Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
ingresa el usuario en un prompt. */
console.log('Ejercicio 13 con for.');



// Numero de eleccion
let numero = prompt('Ingrese un numero : ');

for ( let i = 1; i <= numero; i++) {
    console.log(i);
    
}


/** 14. Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
ingresa el usuario en un prompt. */
console.log('Ejercicio 14 con for.');



// Numero de eleccion
let numero2 = prompt('Ingrese un numero : ');

// let x = 1

// while ( x <= numero2) {
//     console.log(x);
//     x += 2;
// }

for (let i = 1; i <= numero2; i+=2) {
    console.log(i);
    
}

/**15. Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
ingresa el usuario en un prompt. */
console.log('Ejercicio 15 con for.');


// Numero de eleccion
let numero3 = parseInt(prompt('Ingrese un numero : '))

// numero = parseInt(numero)

// let x = numero

// while ( numero >= 1) {
//     console.log(numero);
//     numero--
// }

for ( let i = numero3; i >= 1; i--) {
    console.log(i);
    
}



/**16. Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
tabla del número hasta 12. */
console.log('Ejercicio 16 con for.');


// Numero de eleccion
let numero4 = parseInt(prompt('Ingrese un numero : '))

// let x = 1;

// while ( x <= 12 ) {
//     console.log(numero * x);
//     x++;
// }

for ( let i = 1; i <= 12; i++) {
    console.log(numero4 * i);
    
}




/**17. Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
ingresa un usuario. */
console.log('Ejercicio 17 con for.');



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



// variable resultado
let resultado = 0

// while( i <= maximo) {
//     if ( (i % 2) == 0) {
//         console.log(i);
//         resultado += i;
//     } 
//     i++;   
// }

for ( let i = minimo; i <= maximo; i++ ) {
    if ( (i % 2) == 0) {
        console.log(i);
        resultado += i;
    } 
}


console.log(`El resultado de los numeros pares entre ${maximo} y ${minimo} es de : \n${resultado}`);
