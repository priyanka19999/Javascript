//+++++++++++++++++++++++++++++++++ CONDITIONAL STATEMENTS++++++++++++++++++++++++++++++++++++++

/*1>
 if Statement : The if statement executes a block of code if a specified condition is true.

SYNTAX:
if (condition) {

  // block of code to be executed if the condition is true
}
*/

EXAMPLE:1
if (3!=2) {            // Since 3 is not equal to 2, the condition is true.       
 console.log("hello");  // output : hello
}

// comparision operator: <, >, <=, >=, ==, !=, ===, !==,&&,||


/*2> 
if...else Statement:-The if...else statement executes one block of code if a condition is true and another block if it is false.
SYNTAX:

 if (condition) {
  // block of code to be executed if the condition is true
       } else {
  // block of code to be executed if the condition is false
}
*/
EXAMPLE:1
const temperature = 41

if (temperature === 41 ){
  console.log("less than 50");       // statement is true so output: less than 50
} else{
    console.log("greater than 50");
}


const score = 200
if (score > 100){
  const power ="fly"
  console.log(`user power ${power}`);     // output: user power fly
}
//console.log(`user power ${power}`);   // Error: power is not defined

// implicit scope
const balance = 1000
if (balance>500) console.log("test");   // this is called implicit scope (without {})  // output:test



/* 3> 
else if Statement
:The else if statement specifies a new condition if the first condition is false.

SYNTAX:

if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if condition1 is false and condition2 is true
} else {
  // block of code to be executed if both condition1 and condition2 are false
}

*/

EXAMPLE:1

const amount = 1500
if (amount<500) {
   console.log("less than 500");
} else if (amount<750) {
  console.log("less than 750");
} else if (amount<1000) {
  console.log("less than 1000");
} else{
  console.log("greater than 1200");   // output : greater than 1200, because all the above condition are false only the else part is true 
};



const Userloggedin = true 
const debitcard = true 

if (Userloggedin && debitcard ) {
  console.log("allow to buy courses");     // output : allow to buy courses (because the both conditions are true) 
};


const loggedinFromGoogle = true 
const loggedinFromEmail = true 

if (loggedinFromGoogle || loggedinFromEmail ) {    // || used to check multiple condition if one the condition is true then code will execute. 
  console.log("user logged in");
}                                  // output : user logged in 





