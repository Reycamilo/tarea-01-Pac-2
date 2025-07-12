/** 12. Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup
para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje
de "Vuelva a intentarlo" */

alert('Se ha escogido un numero nuevo para adivinar.')

// Se asigna un numero aleatorio en numero.
let numeroRandom = Math.floor(Math.random() * (15)) + 1
// alert(numeroRandom)

// Se guarda el intento del usuario.
let intento = prompt('Escoja un numero entre 1 - 15 : ');

if (intento == numeroRandom) {
    alert('Buen trabajo.');
    
} else {
    alert('Vuelva a intentarlo.');
    
}


