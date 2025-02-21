/* Creare un array di oggetti di squadre di calcio
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.*/

const footballTeam = [{
    name: "napoli",
    points: 0,
    fouls: 0
},
{
    name: "real madrid",
    points: 0,
    fouls: 0
},
{
    name: "bayern monaco",
    points: 0,
    fouls: 0
},
{
    name: "arsenal",
    points: 0,
    fouls: 0
},
{
    name: "manchester city",
    points: 0,
    fouls: 0
}]


/* Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  for(let i = 0; i < footballTeam.length; i++) {
    const thisFootballTeam = footballTeam[i]
    thisFootballTeam.points = getRandomNumber(0, 100);
    thisFootballTeam["fouls"] = getRandomNumber(0, 100);
  }
console.log(footballTeam);

/* Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const footballTeamNameFouls = [];

for (let i = 0; i < footballTeam.length; i++) {
    const thisFootballTeam = footballTeam[i];
    footballTeamNameFouls.push({name: thisFootballTeam.name, fouls: thisFootballTeam.fouls});
}
console.log(footballTeamNameFouls);



