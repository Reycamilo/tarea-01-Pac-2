let a = prompt(`Escriba un numero : `)
let b = prompt(`Escriba otro numero :`)
let c = prompt(`Escriba otro numero :`)

if(a > b) {
    if( a > c) {
        console.log(`${a} es mayor que ${b} y ${c}`);
        
    } else {
        console.log(`${c} es mayor que ${a} y ${b}`);
        
    }
} else if ( b > c) {
        console.log(`${b} es mayor que ${a} y ${c}`);
    
} else {
        console.log(`${c} es mayor que ${b} y ${a}`);

}