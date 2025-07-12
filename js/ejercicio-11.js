// 11. Determinar si una palabra empieza con mayúscula o no.

let frase = prompt('Ingrese una palabra : ');

let letra = frase.charAt(0)

if (letra === letra.toUpperCase()) {
    console.log(`La letra ${letra} esta en mayuscula.`);
    
} else {
    console.log(`La letra ${letra} esta en minuscula.`);

}

