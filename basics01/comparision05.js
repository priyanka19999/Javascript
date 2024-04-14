//+++++++++++++++ comparision +++++++++++++++//

 let value1 = 2
 let value2 = 1

console.log(value1 > value2  ); 
 console.log(value1 < value2  ); 
 console.log(  2 >= 1  ); 
 console.log(  2 <= 1  ); 
 console.log(2!= 1);
 console.log(2==1);

// comparision between 2 different datatypes

let data="2"
console.log('2'> 1); // true
console.log("02">1); //true

// comparision with null

 console.log(null>0);// false
 console.log(null==0);// false
 console.log(null>=0); //true
/*comparision converts null to a number , treating as a 0 
equality check (==) and comparision works differently. thats why null>=0 is true and null= 0 and null>0 is false.
*/
 
//  comparision with undefined
console.log(undefined>0);// false
 console.log(undefined==0);// false
 console.log(undefined>=0); //false
 console.log(undefined<0); //false


/* === -> strict check 
 it strictly checks the value and its datatype also */

 console.log("2"===2); // false
 console.log("2"==="5"); // false
 console.log("2"==="2"); // true
