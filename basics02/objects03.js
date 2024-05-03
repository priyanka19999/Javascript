//objects : combination of keys and value
// we can access properties of an object using either dot notation (.) or bracket notation ([])

// singleton

// object literals 

const JsUser = {
    name : "priyanka",
    age : 20,
    Email : "pbiswal@gmail.com",
    isloggedin: false,
    lastloginDays:["sunady", "monday"],
    "full name": "priyanka Biswal",
}
console.log(JsUser.Email); // output:pbiswal@gmail.com
console.log(JsUser["Email"]); // [""] used to access object properties using a string key. // output: output:pbiswal@gmail.com
console.log(JsUser["full name"]); // output: priyanka Biswal


// HOW TO DECLARE A SYMBOL AS A KEY  
const mysym = Symbol ("key1")
const mysym1 = Symbol ("key2")
const user1 = {
    mysym :"key1",
    [mysym1] : "key2",
}
console.log(user1.mysym); // output : key1 
console.log(typeof user1.mysym); //output: string
console.log(user1[mysym]); //output: key2
console.log (typeof mysym1); // output : symbol

// HOW TO CHANGE THE VALUE IN A OBJECT 

const JsUser1= {
    email : "barshabiswal@gmail.com",
}
JsUser1.email= "ppbiswal@gmail.com"  //This line updates the email property of the JsUser1 object.
console.log(JsUser1) ;

//Object.freeze () : it is a method i.r Once an object is frozen, its properties and their values remain constant.

Object.freeze(JsUser1)
JsUser1.email= "ppbiswal963@gmail.com"  //This line updates the email property of the JsUser1 object. (this won't work)
console.log(JsUser1); // output: 'ppbiswal@gmail.com' 


JsUser.greeting = function(){
    console.log("hello js user");
}
console.log(JsUser.greeting); // output:[Function (anonymous)] : function reference 
console.log(JsUser.greeting()); // output: hello js user


JsUser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`); //(this.name) would access the value of the "name" property of the object.
}
console.log(JsUser.greetingtwo()); // output: hello js user,priyanka
