// let MyName = "Priyanka Priyadarshani Biswal"
// console.log(MyName.length);  // 29 
// console.log(MyName.trim().length); //29
// console.log(MyName.trueLength())

let MyHeros = ["thor", "Spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
        
    }
    
}
Object.prototype.priyanka = function(){
    console.log(`priyanka is present in all objects`);
    
}

Array.prototype.Arraypriyanka = function(){
    console.log(`Priyana says Hello`);
    
}
// heroPower.priyanka()
// MyHeros.priyanka()
// MyHeros.Arraypriyanka()
// heroPower.Arraypriyanka()

/* Inheritance */

const user = {
    name: "priyanka",
    email: "xyz@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport= {
    isAvailable: true
}

const TASupport = {
    makeAssignment:"JS Assignment",
    fullTime : true,
    __proto__ : TeachingSupport,
}

Teacher.__proto__= user

// Modern Syntax 

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotheruserName = "priyadarshani     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}
anotheruserName.trueLength()
"priyanka".trueLength()
"barsha".trueLength()