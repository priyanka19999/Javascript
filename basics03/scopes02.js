//SCOPES:{}:scope refers to the accessibility of variables, objects, and functions at various parts of the code.

//1> BLOCK SCOPE : Variables declared with let and const are block-scoped, meaning they are only accessible within the block (denoted by {}) in which they are declared.

if (true){
    let a = 10 
    const b = 20
    var c = 30

console.log(a);  // ouput : 10 accessible 
console.log(b);  // output :20 accessible 
console.log(c);    // output :30 accessible
}

console.log(a);  // error: not accessible 
console.log(b);  // error: not accessible 
console.log(c);  // output : 30 (because var is functional scope so c is accessible outside the block.)

//2> GLOBAL SCOPE : Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.

let a = 300 
if (true){
    const b = 20
    console.log("INNER : ", a); // output: INNER : 300 (can be accessible here )
}
console.log(a);   // output : 300  (can be accessible here )


//3> FUNCTION SCOPE:Variables declared within a function using var are confined to that function and cannot be accessed outside of it.

function myName(){
    var c = 100;
    console.log(c);  // output : 100 (accessible here)
}

myName();
console.log(c);   // Error: c is not defined


//4> LEXICAL SCOPE OR NESTED SCOPE: JavaScript functions are lexically scoped, meaning they form closures. A closure gives access to an outer function’s scope from an inner function
//EXAMPLE:1
function one (){
    const username = "barsha"

    function two () {
        const website = 'youtube'
        console.log(username);
    }
    console.log(website);   // error : website is not defined

    two()   // output : barsha (accessible here)
}

one ()

//EXAMPLE:2
if(true){
   const username = "priyanka"

   if (username==="priyanka"){
    const website = " youtube"
    console.log(username + website);  // output: priyanka youtube (accessible here)
   }
   console.log(website); // error :  website is not defined

}
console.log(username);  // error : username is not defined


//++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++++++//

/* HOISTING :  Variable and function declarations are hoisted to the top of their scope. 
This means that they can be referenced before they are declared, though var declarations are hoisted with undefined as their initial value, while let and const declarations are not initialized.*/

addone(5)
function addone(numb){
    return numb +1
}
    console.log(addone(5));  // output :6 

//*******//

    addtwo(5)
    const addtwo = function(numb){
        return numb+2
    }

    console.log(addtwo(5));  // Error: Cannot access 'addtwo' before initialization 
