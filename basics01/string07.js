const name = "this is a toy"
const value = 70
console.log(name+value); // this is a toy70
console.log(name + "  its value is" +  value  + "  only for kids"); // output: this is a toy its value is 70 only for kids


const name1 = "this is a toy"
const value1 = 70
console.log(`${name1} its value is  ${value}  only for kids`);  // output: this is a toy its value is 70 only for kids
// string interpolation

const gameName= new String ('priya')
console.log(gameName[0]);   // output: p
// [] is used access individual characters by their index within the string.
console.log(gameName.__proto__);   //  output:{}
// used to access an object's prototype



console.log(gameName.length); // output: 5
//.length used to get the length of an array or the number of characters in a string. 
console.log(gameName.toUpperCase()); // output: PRIYA
// .touppercase() method is used to convert a string to uppercase.This method doesn't change the original string; it returns a new string with all letters converted to uppercase.
console.log(gameName.toLowerCase()); //  output:priya
//.toLowerCase() method is used to convert a string to lowercase.
console.log(gameName.charAt(3)); //  output:y
//charAt() used to retrieve the character at a specified index within a string.
console.log(gameName.indexOf("i")); //  output:2
// .indexOf("") method is used to find the index of the first occurrence of a specified value within a string. If the value is not found, it returns -1. 


const gameName1= new String ('bar-sha')
const newString1 = gameName1.substring(0,4) //  output:bar-
console.log(newString1);
 //.substring(start,end)used to extract a portion of a string and return it as a new string.



const anotherString = gameName1.slice (0,-2)  // output: bar-s
// .slice() method is used to extract a portion of a string or an array and return it as a new string.
console.log(anotherString);

const newString2 =" barshu" //  output:barshu
console.log(newString2.trim()); // .trim() removes the leading and trailing whitespace from the string.


 const url = "https://priyanka.com/priya96@.biswal"
console.log(url.replace('30%' , '-')); //  output: https://priyanka.com/priya96@.biswal
// .replace(searchvalue,replacevalue)  used to replace a specified substring or pattern within a string with another string.

const url1= "http://priya93.com/priyanka@.biswal"
console.log(url1.includes('priya'));  //  output: true
//.includes() method is used to check whether a string contains another string. 
//It returns true if the specified string is found within the original string, and false otherwise.


console.log(gameName.split('-'));  //  output: ['priya'] 
// .split() method is used to split a string into an array of substrings based on a specified separator.

let val= "uyrterve"
console.log(val.charCodeAt(0)); // output: 117  (unicode value for u)
// .charCodeAt(index) returns the Unicode value of the character at a specified index within a string. 

let code = "ojydbgsvrgsybs"
console.log(code.codePointAt(0));  // output: 111 
// codePointAt(index) usedto handle Unicode characters beyond the Basic Multilingual Plane (BMP),


let p = 12.765;
console.log(p.toFixed(2)); // output: 12.77
// It's used to format a number using fixed-point notation.
// This means it converts a number to a string, keeping a specified number of digits after the decimal point.


let U = "YOU"
let V ="ARE"
let X = "MY"
let Y ="SUNSHINE"
let combine= U.concat( " " , V, " " , X, " " ,Y) // output : YOU ARE MY SUNSHINE
console.log(combine);  // concat() is used to concatenate two or more strings.
