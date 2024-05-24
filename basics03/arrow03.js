// this : it refers to an object. alone, "this" keyword refers to global object. "this" is also used to refer the current context.

// this (in object)
const user ={
    username : "barsha",
    prices: "999",

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);  
        console.log(this);          
    }
}
user.welcomemessage()   // output : barsha, welcome to website

user.username = "priyanka"  // changing the value of username into priyanka 
user.welcomemessage()   // output: priyanka, welcome to website

console.log(this);  // output : {}(when we are in node environment "this" refers to an empty object becoz there is no context within the global scope


// this (in function)  : this is undefined for functions 

//EXAMPLE:1 (normal function declaration)

function chai(){
    let username ="sai"
    console.log(this.username);
}
chai()  // output : undefined



//EXAMPLE:2  (function declaration using variable)
const chai = function(){
    let username ="sai"
    console.log(this.username);
}
chai()  //output : undefined



//EXAMPLE:3  (function declaration using arrow function )
const chai = () => {
    let username ="sai"
    console.log(this.username);
}
chai() // output : undefined 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//ARROW FUNCTIONS: Arrow functions in JavaScript are a concise way to write functions using the => syntax. 


const addTwo = (num1,num2) => {     // if you wraping  "num1+num2" within the "{}"" so there is need to use "return"
    return num1+num2              
}
console.log(addTwo(3,4));  // output : 7 

// implicit returned : it is a way of returning a value from a function without using the "return" keyword

const addTwo2 = (num1,num2) =>  num1+num2   // no need of "return" and () and {}
console.log(addTwo2(3,4));  // output : 7

const addTwo3 = (num1,num2) => (num1+num2)  // if you wraping  "num1+num2"within the paranthesis "()"" so no need to use "return"
console.log(addTwo3(3,4));  // output : 7

const addTwo4 = (num1,num2) => ({username:"barsha" })
console.log(addTwo4(3,4));  // output : { username: 'barsha' }


