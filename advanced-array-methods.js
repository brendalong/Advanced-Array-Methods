// *********************************
// *         ADVANCED METHODS         *
// *********************************
/*
  The forEach method is equivalent to using
  a for loop to iterate over items in the array
 */
var colors = ["red", "blue", "green", "yellow", "orange", "teal"];

colors.forEach(function(item) {
  var newColorString = "I like this color: " + item;
   // console.log(newColorString);
});

// same as:
for (var i = 0; i < colors.length; i++) {
  var newColorString = "I like this color: " + colors[i];
  // console.log(newColorString);
}




/* Both map and filter do not modify the array. 
Instead they return a new array of the results. */

/*
  The map method lets you create a -->>new array<<-- after
  executing some logic on each item in the original
  array
 */

var reversedColors = colors.map(function(color) {
  return color.split("").reverse().join("");
});
//console.log("reversedColors",reversedColors);


// same as:
var reversedColors = [];
for (var i = 0; i < colors.length; i++) {
  var reversed = colors[i].split("").reverse().join("");
  reversedColors.push(reversed);
}
// console.log("reversedColors", reversedColors);








/*
  The filter method ALSO creates a new array, which will
  be populated with items from the original array
  that match a certain criteria.
 */
var fourLetters = colors.filter(function(color) {
  return color.length === 4;
});
// console.log("fourLetters",fourLetters);

// same as:
var fourLetters = [];
for (var i = 0; i < colors.length; i++) {
  if (colors[i].length === 4) {
    fourLetters.push(colors[i]);
  }
}
// console.log("fourLetters", fourLetters);











/*
  The reduce method will perform the same operation
  on each item in an array, but returns (reduces to) -->> a single
  value <<--- as a result of logic you write
 */
var numbers = [51, 10, 62, 4, 13, 9];

var sum = numbers.reduce(function (prev, curr) { //<-- it's smart enough to know first number is prev. then previous becomes the result of added numbers
  return prev + curr;
});
// console.log("sum", sum);

// same as:
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// console.log("sum", sum);







/*
Chaining Methods, also known as Cascading, 
refers to repeatedly calling one method after another on an object, 
in ONE continuous line of code.
*/

// *****************CHAINING METHODS EXERCISE*****************
/*instructions
Sort the numbers in DESCENDING order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then substract 1.
Then output (console) the sum of all the resulting numbers.
*/

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chainingResult = integers
// Sort the numbers in descending order (10, 9, 8, 7, etc).
.sort(function(a,b){return a-b})
.reverse()
// Remove any integers greater than 19.
.filter(function(num){return num < 19})
// Multiply each remaining number by 1.5 and then substract 1.
.map(function(num){ return (num * 1.5) -1 })
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
.reduce(function(previous, current){ return previous + current});
 // console.log("result", chainingResult);
