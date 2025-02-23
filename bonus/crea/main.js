/* Crea un array di valori unici
Scrivi una funzione valoriUniciPerProprieta che prende un array di oggetti e una chiave, e restituisce un array contenente i valori unici di quella proprietà. */

console.log(valoriUniciPerProprieta([
    { nome: "Mario", citta: "Roma" },
    { nome: "Luigi", citta: "Milano" },
    { nome: "Anna", citta: "Roma" }
], "citta")); // Output: ["Roma", "Milano"]

function valoriUniciPerProprieta(arrObj, chiave){
    let newArray = [];
    let newObj = {};
    for(let i = 0; i < arrObj.length; i++){
        const thisElement = arrObj[i][chiave];
        if(newObj[thisElement] === undefined){
            newObj[thisElement] = true 
            newArray.push(thisElement)
        }
    }
    return newArray
}