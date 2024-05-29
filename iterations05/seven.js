//map Method
//The map method creates a new array with the results of calling a provided function on every element in the calling array.
/* SYNTAX:
const newArray = array.map(callback(element[, index[, array]])[, thisArg])

callback: Function that produces an element of the new array, taking three arguments:
element: The current element being processed.
index (optional): The index of the current element.
array (optional): The array map was called upon.
thisArg (optional): Value to use as this when executing the callback.

 */

EXAMPLE:1 // Add 10 to each numbers
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbs = myNumbers.map((num) => num + 10)
console.log(newNumbs);  // output:  11, 12, 13, 14, 15,16, 17, 18, 19, 20

EXAMPLE:2  //Square of numbers
const numbers = [1,2,3,4,5]
const squareNumbers = numbers.map ((num)=>num*num)
console.log(squareNumbers);  // output: 1, 4, 9, 16, 25 

// CHAINING 
const numbs = [1,2,3,4,5,6,7,8,9,10]
const newnumbs = numbs
.map ((num) => num * 10)   // 10, 20, 30, 40,  50,60, 70, 80, 90, 100
.map ((num) => num + 1)    // 11, 21, 31, 41,  51, 61, 71, 81, 91, 101
.filter((num) => num >= 40)  // 41, 51,  61, 71,81, 91, 101
console.log(newnumbs); // output:   41, 51,  61, 71,81, 91, 101