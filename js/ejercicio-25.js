/**25. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
un color introducido por el usuario a través de un prompt se encuentra dentro del array o
no. */

let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

let colorIngresado = prompt('Ingrese un colo para verifcar existencia en la base de datos : ')

if(colores.includes(colorIngresado)) {
    console.log(`El color ${colorIngresado} si esta en la base de datos`);
    
} else {
    console.log(`El color ${colorIngresado} no esta dentro de la base de datos`);

}