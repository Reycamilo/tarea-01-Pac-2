// 10. Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
// determine si el triángulo es válido o no.

let a = prompt('Ingrese el primer angulo del triangulo: ')
let b = prompt('Ingrese el segundo angulo del triangulo: ')
let c = prompt('Ingrese el tercer angulo del triangulo: ')

a = Number(a);
b = Number(b);
c = Number(c);

if ( (a + b + c) != 180 ) {
    console.log('El triangulo no es valido');
    
} else {
    console.log('El triangulo es valido.');
    
}