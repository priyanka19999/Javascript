// While loop : The while loop executes as long as the specified condition is true.
/* SYNTAX: 

let i = 0;            // (intialization)
while (i < 10) {       //(condition)
    console.log(i);
    i++;            //(increment/ decrement)
}
*/
EXAMPLE:1
let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index+2
}

EXAMPLE:2 //ARRAY
let myArray =[ "flash","batman", "superman"]

let arr = 0
while (arr < myArray.length ){
    console.log(`Value is ${myArray[arr]}`);
   arr = arr + 1               // output Value is flash ,Value is batman,Value is superman
}


// do....while loop : The do...while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.
/* SYNTAX: 

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
 */

EXAMPLE:1
 
let score = 11

do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);      // output: score is 11  [The "do" block executes first, regardless of the condition in the 'while' part.]

