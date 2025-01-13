// literal object :an object literal is a way to create a simple object using a set of key-value pairs, enclosed within curly braces {}

const user = {
    name : "priyanka",
    age : "20",
    loginCount:8,
    signedIn: true,

    getUserDetails : function () {
        //console.log("got the details from database");
        //console.log(`Username: ${this.name}`);
        // console.log(this); // it shows the given current context
        
        
    }
}

//console.log(user.name);
//console.log(user.getUserDetails());
// console.log(this);



// constructor function

// const promiseOne = new Promise()
// const date = new Date()  // new keyword used to create new object and it is the constructor function.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}

const userOne = new User("priyanka",12,true)
const userTwo = new User ("barsha", 24 , false)
console.log(userOne.constructor); // it gives the response of the user
//console.log(userTwo);

/* instanceof()
instanceof operator in JavaScript is used to check if an object is an instance of a specific class or constructor function. 

Syntax: object instanceof constructor

1> object: The object to check
2> constructor: The constructor function (or class) you’re testing against.
->instanceof will always return false if the object is null or undefined, as they don’t have a prototype chain.

Example:

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true

*/