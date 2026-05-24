/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let p1 = "OLA", p2 = "ALO", index;

/**
 * Comprueba si dos cadenas de texto son anagramas entre sí. (se obvian los caractéres especiales y espacios)
 * 
 * @param {string} [word1=""] - Primera palabra o frase a evaluar.
 * @param {string} [word2=""] - Segunda palabra o frase a evaluar.
 * @returns {boolean} `true` si son anagramas; `false` si no lo son o si ambas cadenas son idénticas.
 */

function esAnagrama(word1 = "", word2 = "") {
    
    if(word1 === word2){
        console.log(`Dos palabras IGUALES no pueden ser un ANAGRAMA :/ ("${p1}" = "${p2}")`);
        return false;
    }

    ar1 = word1.toLocaleLowerCase().split("");
    ar2 = word2.toLocaleLowerCase().split(""); 

    const CARACTERES_ARR = [
        ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', 
        ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
    ];

    // Se limpian los caracteres especiales de la descomposición de las cadenas.
    for (const caracter of CARACTERES_ARR) {
        ar1 = ar1.filter((i) => i !== caracter);
        ar2 = ar2.filter((i) => i !== caracter);
    }

    for (const letra of ar1) {
        //Indece de coincidencia de letras entre la primera y segunda palabra.
        index = ar2.indexOf(letra);
        
        if( index >= 0 ){ 
            ar2.splice(index, 1);
        }    
    }

    if(ar2.length === 0){
        console.log(`Las palabras "${p1}" y "${p2}" son un ANAGRAMA!! :D`);
        return true;
        
    }else{
        console.log(`Las palabras "${p1}" y "${p2}" NO son un ANAGRAMA D;`);
        return false;
    }
}        

console.log(esAnagrama(p1, p2));