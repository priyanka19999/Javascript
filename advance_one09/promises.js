// Promise using variable : we can store promise by using variable
const promiseOne = new Promise(function(resolve, reject){
    //Do Asyncc task
    //Database calls, cryptography , network

    setTimeout( function(){
        console.log("Async is completed");
        resolve() 
    }, 1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})


//Calling Promise without variable
new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("async task 2");
    resolve()
  }, 2000)

}).then(function(){
  console.log("async 2 resolved");
})


// PASSING PARAMETERS
const promiseThree = new Promise(function(resolve, reject){
 setTimeout(function() {
    resolve({Username: "Barsha" , Age: "20" , Gender: "Female"})  // passing the data in the form of object. (data can also be array , function etc)
 }, 1000)
})
promiseThree.then(function(User){
    console.log(User);  // it will print all the parameters/ data that is already passed within the resolve()
    
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
      let error = true 
      if (!error) {
        resolve({Username:'Priyanka' , Email: "xyz@gmail.com" , Password: "1234"})
      } else{
        reject("ERROR: Something Went Wrong")
      }
    }, 1000)
})

promiseFour
.then((user)=>{
console.log(user);
 return user.Username
})
.then((Username)=>{             //chaining process
  console.log(Username);
})
.catch(function(error){
  console.log(error);
})
.finally(function(){
  console.log("The promise either resolved or reject");
  
})


//Async await , trycatch ()
const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function() {
    let error = true 
    if (!error) {
      resolve({Username:'Javascript' , Email: "xyz@gmail.com" , Password: "1234"})
    } else{
      reject("ERROR: JS Went Wrong")
    }
  }, 1000)
});

async function consumePromiseFive(){
  try {
    const response = await promiseFive
  console.log(response);

  } catch (error) {
    console.log(error);
  }
  }
consumePromiseFive()



async function getAllUsers(){
try {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data =  await response.json()
console.log(data);
} catch (error) {
  console.log("E:", error);

}
}
getAllUsers()

fetch('https://api.github.com/users/PriyankaPriyadarshani')
.then((response)=>{
 return response.json()
  
})
.then((data)=>{
  console.log(data);
  
})


.catch((error) => {
  console.log(error);
  
  })

.finally(()=>{
 console.log("finally code ran ");
 
})


