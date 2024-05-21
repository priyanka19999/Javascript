//const tinderUser = new Object ()  // singleton object // output :{} 
const tinderUser = {}  // non-singleton object // output: {}

tinderUser.id = "123abc"
tinderUser.name = "Barshu"
tinderUser.isLoggedIn = false 

console.log(tinderUser);

// objects within an object 

const regularUser = {
    email: "ppb@gmail.com",
    fullname : {
        Userfullname : {
            Firstname: "Priyanka",
            Middlename : "Priyadarshani",
            Lastname : "Biswal",
        }
    }

}
console.log(regularUser.fullname);   // output : Userfullname: {    Firstname: 'Priyanka',Middlename: 'Priyadarshani',Lastname: 'Biswal'
console.log(regularUser.fullname.Userfullname.Lastname);  // output: 
// value can be access using dot notation 



// Object.assign(): is used to copy the enumerable properties from one or more source objects to a target object.
//SYNTAX: Object.assign(target,sources)

const obj1 = {1: "a", 2 :"b" }
const obj2 = {3: "a", 4 :"b" }

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)   // output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//{...spread operator}  : used for copying arrays and objects, merging arrays and objects, and passing arguments to functions.

const target ={1: "a",2:"b"}
const source1 ={8: "a" ,9: "b"}
const source2 ={4: "a" ,5: "b"}

const source3 = {...source1, ...source2}
console.log(source3);   // output : { '4': 'a', '5': 'b', '8': 'a', '9': 'b' }


const users = [
    {
        id : 1,
        email: "gjn@gmail.com",
    },

    {
         id : 3,
        email: "joke@gmail.com",
    },
    {
        id : 7,
       email: "coke@gmail.com",
   },

]

users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser)); // output :[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // output : [ '123abc', 'Barshu', false ]
console.log(Object.entries(tinderUser));  // output :  [ [ 'id', '123abc' ], [ 'name', 'Barshu' ], [ 'isLoggedIn', false ] ]

console.log(Object.entries(tinderUser.hasOwnProperty ("islogged")));

  
// OBJECTS DESTRUCTURING 
const course = {
    coursename: "js in hindi",
    price:"9999",
    courseInstructor:"barsha",
}

//course.courseInstructor

const {courseInstructor} = course 
console.log(courseInstructor); // output:barsha 

const {courseInstructor: instructor} = course  // here we just changed the courseInstructor to instructor. 
console.log(instructor); // output : barsha

