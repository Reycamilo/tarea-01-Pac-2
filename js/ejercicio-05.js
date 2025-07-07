let frase = prompt(`Escriba una frase : `)

// pasamos a minisculas toda la frase para buscar las a
frase = frase.toLowerCase()

let vecesA = 0
let vecesE = 0
let vecesI = 0
let vecesO = 0
let vecesU = 0

for ( let i = 0; i <= frase.length; i++) {
    switch(frase[i]) {
        case 'a' : 
            vecesA++
            break;
        case 'e' : 
            vecesE++
            break;
        case 'i' : 
            vecesI++
            break;
        case 'o' : 
            vecesO++
            break;
        case 'u' :
            vecesU++
            break;
    }
}

console.log(`La letra 'a' se repite ${vecesA}`);
console.log(`La letra 'e' se repite ${vecesE}`);
console.log(`La letra 'i' se repite ${vecesI}`);
console.log(`La letra 'o' se repite ${vecesO}`);
console.log(`La letra 'u' se repite ${vecesU}`);
