function dwarfRollCall(dwarves) {
var dwarvesList = [];
for (let i = 0; i < dwarves.length; i++) {
dwarvesList.push(`${i + 1}. ${dwarves[i]} `);
}
/*create a new array to hold the numbered list
initialize i at 0, set condition so that i is less than length of array, increment by 1 for each initialization
push to the index (starting at 0)+ 1. for elements in dwarf array with each of their names */
    return dwarvesList.join('');
    }
    //join() method lets you group the elements of the dwarf array into a string. (seperator, comma by default)
function summonCaptainPlanet(planeteerCalls) {
 var calls = [];
 for (let i = 0; i < planeteerCalls.length; i++) {
   calls.push(planeteerCalls[i].toUpperCase() + "!");
}
return calls;
}
/*create an empty array within function to store calls uppercase with !, create a for loop, and push each element of
planeteerCalls to the end of the new array in  uppercase and adding a ! */

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++ ) {
    if (words[i].length > 4) {
      return true;
    } else {
    return false; }
}
}

/* function w/ parameter words creates a for loop that returns true if each element in the words array is greater than
4 characters and false is less than 4 */

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
/*function accepts the parameter of an array of foods
create a variable to hold cheese values
for loop that will execute and return the specific cheese in the array if the argument includes that particular cheese
.includes() method determines if food array contains any of the cheese elements in the cheese array
otherwise it will return the string no cheese */
