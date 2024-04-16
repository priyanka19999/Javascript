const name = "this is a toy"
const value = 70
console.log(name+value);
console.log(name + "  its value is" +  value  + "  only for kids");


const name1 = "this is a toy"
const value1 = 70
console.log(`${name1} its value is  ${value}  only for kids`);  // string interpolation

const gameName= new String ('priya')
console.log(gameName[0]); // [] is used access individual characters by their index within the string.
console.log(gameName.__proto__);  // used to access an object's prototype



console.log(gameName.length);  //.length used to get the length of an array or the number of characters in a string. 
console.log(gameName.toUpperCase()); // .touppercase() method is used to convert a string to uppercase.This method doesn't change the original string; it returns a new string with all letters converted to uppercase.
console.log(gameName.toLowerCase()); //.toLowerCase() method is used to convert a string to lowercase.
console.log(gameName.charAt(3)); //charAt() used to retrieve the character at a specified index within a string.
console.log(gameName.indexOf("i")); // .indexOf("") method is used to find the index of the first occurrence of a specified value within a string. If the value is not found, it returns -1. 


const gameName1= new String ('bar-sha')
const newString1 = gameName1.substring(0,4) //  //.substring(start,end)used to extract a portion of a string and return it as a new string.
console.log(newString1);



const anotherString = gameName1.slice (0,-2)  // .sclice method is used to extract a portion of a string or an array and return it as a new string.
console.log(anotherString);

const newString2 =" barshu"
console.log(newString2);
console.log(newString2.trim()); // .trim() removes the leading and trailing whitespace from the string.


 const url = "https://priyanka.com/priya96@.biswal"
console.log(url.replace('30%' , '-')); // .replace(searchvalue,replacevalue)  used to replace a specified substring or pattern within a string with another string.


console.log(url.includes('priya'));  //includes() method is used to check whether a string contains another string. It returns true if the specified string is found within the original string, and false otherwise.


console.log(gameName.split('-'));   // .split() method is used to split a string into an array of substrings based on a specified separator.