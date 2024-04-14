// primitive (call by value)
// 1>number = range(2^53)
// 2> Bigint = 12346567887644332n ( usrd for scientific value or big number )
// 3> string ="abhfryh"
// 4>boolean = true/false or 0/1
// 5>null= standalone value
// 6> undefined = declaring a variable without giving any value 
// 7> symbol= unique

 const score=100
 const scoreValue=100.3

 const isLoggedIn= false
 const outsideTemp=null
 let userEmail;

const id = Symbol("123")
const Anotherid = Symbol("123")
console.log(id === Anotherid);

const bigNumber = 3673654372782726524435350n
console.log(typeof bigNumber);

// Non-primitive (reference type )
// Array, Object,Functions
// array
const heros =['shaktiman','nagaraj', 'doga'];
// Object
let myobj =
{
    name: "priyanka",
    age: 20,
}

// Functions
const myfunction = function () {
console.log("hello world");
}
console.log(typeof outsideTemp); // object
console.log(typeof myfunction); // function
console.log(typeof heros); //object