//+++++++++++++++++++++++++++++++++++++++++NUMBERS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
const score = 400 
console.log(score); // output: 400

const balance = new Number (200)
console.log(balance);   // output: [Number:200]

//A new 'Number' object is created with a value of 200 using the 'new' keyword and the 'Number' constructor. 
//The 'Number' constructor is used to create a new 'Number' object wrapper for the specified numeric value.

const val =13490
console.log(val.toExponential(3)); // output: 1.349e+4
//.toExponential() used to represent a number in exponential notation

let num = 12.67
console.log(num.toPrecision(3)); // Output: 12.7
//toPrecision() used to represent a number using a specified precision.

console.log(balance.toString().length); // Output:3
// .toString used to convert the number into string and .length  used to find the length of the string.


const amount = new Number(100.67)
console.log(amount.toFixed(2)); //output: 100.67


const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); //output: 1,00,000
//.toLocaleString() used to convert a date, number, or other data type into a string representation based on the current locale. 

//+++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++//

console.log(Math);
 
console.log(Math.abs(-4))   // output: 4
//Math.abs() used to returns the absolute value of a number, which is the non-negative value of the number without regard to its sign. 

console.log(Math.round(4.87)); // output : 5
//Math.round() used to returns the value of a number rounded to the nearest integer.

console.log(Math.ceil (4.2)); // output : 5
console.log( Math.ceil(-4.1)) // output: -4
// Math.ceil() returns the smallest integer greater than or equal to a given number. It rounds a number upward to its nearest integer. 

console.log(Math.floor(4.9)); // output:4
console.log( Math.floor(-4.1)) // output : -5
// Math.floor () returns the largest integer less than or equal to a given number. It rounds a number downward to its nearest integer.

console.log(Math.pow(2,3)); // Output: 8, because 2 raised to the power of 3 is 8
console.log(Math.pow(10, -2)); // Output: 0.01, because 10 raised to the power of -2 is 0.01
// Math.pow is used to raise a base number to an exponent power.( used to find a power of a number)

console.log(Math.min(10,2,8,9,1,5,)); // output: 1 , because the minimum is 1.
console.log(Math.max(10,20,24,76,99,89)); // output: 99 , because the maximum is 99.

console.log(Math.random()) // output : 0.25691401100934064
//.random returns a floating-point, pseudo-random number in the range from 0 inclusive to 1 exclusive.
// This means that it generates a random number greater than or equal to 0 (inclusive) and less than 1 (exclusive).

console.log(Math.random()*10+ 1); //output : 9.569150908429819
console.log(Math.floor(Math.random()*10)+ 1); //output : 9


 const min = 10 
 const max = 20 
 Math.random() * (max-min+1)
 console.log(Math.random() * (max-min+1)); // output: 2.1614876695490297
 console.log(Math.random() * (max-min+1)) + min; // output: 5.851449905668997 
 console.log(Math.floor(Math.random() * (max-min+1)) + min); // output : 10
