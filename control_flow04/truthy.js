//STRING
const userEmail = "p@priya.ai"      // if there is something within the string that assume to be a truth value 
if (userEmail) {
    console.log("got the user email");          // output : got the user email
}else{
    console.log("dont have user email");          
}                                        


//EMPTY STRING
const UserEmail = ""      // if there is nothing within the string or an empty string  that assume to be a false  value 
if (UserEmail) {
    console.log("got the user email");
}else{
    console.log("dont have user email");     // output : dont have user email     
}                

// EMPTY ARRAY
const Username = []      // if there is an empty array that assume to be a true value 
if (Username) {
    console.log("got the user name");
}else{
    console.log("dont have user name");     // output : got the user name
}                


// how to detect array is empty or not in condition statement
const Username = [] 
if (Username.length === 0) {
    console.log("array is empty");  // output : array is empty 
}


/* falsy value in js 
false,   0,   -0,  BigInt(0n), "" (empty string) ,  null ,  undeffined,  NaN (not a number)*/

/* truty value in js 
"0"   , "false"  ,   " " , [] (empty array),   {} (empty object),  function(){} (empty function) */



// how to detect object is empty or not in condition statement.
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");    // output :object is empty
}


// Nullish Coalescing operator (??) : null, undefined
// provides a way to handle null and undefined values. 
//It is used to return the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.

EXAMPLE:1
let val1 
val1 =  5 ?? 10
console.log(val1);    // output: 5 

EXAMPLE:2
let val
val = null ?? 8
console.log(val ); // output: 8 it returns Rhs operand when Lhs operand is null 

EXAMPLE:3   
let val2 
val2 = undefined ?? 15 
console.log(val2);       // output : 15 

EXAMPLE:4
let val3 
val3 = null ?? 9 ?? null ?? 8    // output : 9
console.log(val3);


//Terenary operator
// syntax: condition ? true statement : false statement

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("grater than 80");    // output: greater than 80
