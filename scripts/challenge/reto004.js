/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const CANT = 100;

for (let index = 0; index <= CANT; index++) {
    (esPrimo(index))? console.log(index):"";
}

function esPrimo(number) {
    
    if(number === 1 || number === 0){
    return false;
    }   
    
    for(let i = number; i > 1 ;i--){
        
        if(i === number){
            continue;
        }

        if(Number.isInteger(number/i)){
            return false;
        }
    }
    return true;
}