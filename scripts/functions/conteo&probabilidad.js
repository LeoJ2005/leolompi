let n, m, a, b, c, option, r, nDB, pDB, qDB, ensayos;

// VARIABLES: Conteo y Probabilidad

n = 7
m = 5

a = 2
b = 2
c = 2

// VARIABLES: Distribucion binomial

nDB = 4
pDB = 0.50
qDB = (1 - pDB)
ensayos = 4

// Opción

option = 7;

/**
  * 0 : D3fault
  * 1 : Variacion
  * 2 : Permuta
  * 3 : Permuta con repeticion
  * 4 : Permuta circular
  * 5 : Combinacion
  * 6 : Variacion con repeticion
  * 7 : Distribucion Binomial
  * 8 :
*/


// Ejecucion

switch(option){

    case 0:
        console.log("Selecciona alguna opcion");
        break;
    case 1:
        console.log(`VR = ${n}^${m} = ${n**m}`);
        break;
    case 2:
        console.log(`P${n} = ${n}! = ${factorial(n)}`)
        break;
    case 3:
        console.log(`Pr↑${n}↓${a}*${b}*${c} = ${n}! / ${a}! * ${b}! * ${c}! = ${factorial(n) / (factorial(a) * factorial(b) * factorial(c))}`);
        break;
    case 4:
        x = (n - 1);
        console.log(`Pcn = \n(${n} - 1)! = \n${factorial(x)}`);
        break;
    case 5:
        numerador = factorial(n);
        x = n - m;
        denominador = ( factorial(x) * factorial(m) );
        resultado = numerador / denominador;
        console.log(`C↑${n}↓${m} = \n${n}! / (${n}*${m})! * ${m}! = \n${numerador} / ${denominador} = \n${resultado}`);
        break;
    case 6:
        numerador = factorial(n);
        x = n - m;
        denominador = factorial(x);
        resultado = numerador / denominador;
        console.log(`V↑${n}↓${m} = \n${n}! / (${n} - ${m})! = \n${numerador} / ${denominador} = \n${resultado}`);
        break;
    case 7:
        for (var i = 0; i <= ensayos; i++) {
        numerador = factorial(nDB);
        x = nDB - i;
        denominador = ( factorial(x) * factorial(i) );
        resultado = numerador / denominador;
            console.log(`P(x = ${i})(↑${nDB}↓${i}) = [ ${nDB}! / (${nDB} - ${i})! * ${i}! ] * ${pDB}^${i} *  ${qDB}^${nDB}-${i} = ${(resultado * (pDB**i) * (qDB**(nDB - i)))}\n`)
        }
  }
  

// Funciones

//Factorial de n numero
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let resultado = 1;
  for (let i = n; i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}