/* Conta la frequenza delle parole in una stringa
Scrivi una funzione conteggioParole(str) che restituisca un oggetto in cui le chiavi sono le parole e i valori il numero di volte che compaiono nella stringa. */

console.log(conteggioParole("ciao mondo ciao a tutti mondo")); 
// Output: { ciao: 2, mondo: 2, a: 1, tutti: 1 }

function conteggioParole(str) {

const newObject = {};
const strWithoutSpace = str.split(/\s+/);

for(let i = 0; i < strWithoutSpace.length; i++){
    const thisElement = strWithoutSpace[i];
    if(newObject[thisElement]){
        newObject[thisElement]++; 
    }
    else {
        newObject[thisElement] = 1;
    }
} 
return newObject
}