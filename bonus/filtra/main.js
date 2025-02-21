/* Filtra gli oggetti con una proprietà specifica
Scrivi una funzione filtraPerProprieta(arr, chiave, valore) che accetti un array di oggetti e restituisca solo quelli in cui la proprietà chiave ha un certo valore. */

const studenti = [
    { nome: "Paolo", corso: "Matematica" },
    { nome: "Sara", corso: "Fisica" },
    { nome: "Luca", corso: "Matematica" }
  ];

function filtraPerProprieta(arr, chiave, valore){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        const thisElement = arr[i];
        if(thisElement[chiave] === valore)
            newArray.push(thisElement)
    }
    return newArray;
}

  console.log(filtraPerProprieta(studenti, "corso", "Matematica")); 
  // Output: [{ nome: "Paolo", corso: "Matematica" }, { nome: "Luca", corso: "Matematica" }]