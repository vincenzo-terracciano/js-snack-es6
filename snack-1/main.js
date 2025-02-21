/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const bike = [{
    type: "gravel",
    weight: 20
},
{
    type: "fixed-bike",
    weight: 25
},
{
    type: "aeroad",
    weight: 15
},
{
    type: "endurance",
    weight: 27
},
{
    type: "mtb",
    weight: 30
}]

let lightBike = bike[0];

for(i = 0; i < bike.length; i++){
    const thisBike= bike[i];
    if(thisBike.weight < lightBike.weight)
        lightBike = thisBike
}
console.log(lightBike);


