let frase = prompt(`Escriba una frase : `)

// pasamos a minisculas toda la frase para buscar las a
frase = frase.toLowerCase()

let vecesA = 0

for ( let i = 0; i < frase.length; i++) {
    if (frase [i] === "a") {
        vecesA++;
    }
}

console.log(`La letra 'a' se repite ${vecesA}`);
