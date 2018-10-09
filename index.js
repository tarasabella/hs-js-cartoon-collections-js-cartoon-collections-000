function dwarfRollCall(dwarves) {
var dwarvesList = [];
for (let i = 0; i < dwarves.length; i++) {
dwarvesList.push(`${i + 1}. ${dwarves[i]} `);
}
/*create a new array to hold the numbered list
initialize i at 0, set condition at length of array, increment by 1 for each initialization
push to the number of the dwarf and its name to the new array */
    return dwarvesList.join('');
    }
    //join() method lets you group the elements of the dwarf array into a string. (seperator)
function summonCaptainPlanet(planeteerCalls) {
 var calls = [];
 for (let i = 0; i < planeteerCalls.length; i++) {
   calls.push(planeteerCalls[i].toUpperCase() + "!");
}
return calls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++ ) {
    if (words[i].length > 4) {
      return true;
    } else {
    return false; }
}
}

function findTheCheese (foods) {
var cheese = ["cheddar", "gouda", "camambert"]
  for (let i = 0; i < foods.length; i++) {
    if (foods.includes(cheese[i])) {
      return (`${cheese[i]}`);
    } else {
       return "no cheese!";
      }
  }
}
