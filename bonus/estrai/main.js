/* Estrai un array di valori da una certa proprietà di un array di oggetti
Scrivi una funzione estraiValori(arr, chiave) che restituisca un array con tutti i valori associati a una certa proprietà. */

const prodotti = [
    { nome: "Laptop", prezzo: 1000 },
    { nome: "Mouse", prezzo: 30 },
    { nome: "Monitor", prezzo: 200 }
  ];

  function estraiValori(arr, chiave) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        const thisElement = arr[i]
        newArray.push(thisElement[chiave])
    }
    return newArray;
  }
  
  console.log(estraiValori(prodotti, "nome")); 
  // Output: ["Laptop", "Mouse", "Monitor"]