// FUNCTIONS:  a function is a reusable block of code designed to perform a particular task. 
  
/*SYNTAX : function functionName(parameters) {
                   function body
                   code to be executed 
                }

                functionname(arguments)   // fore exection
                
    */

function saymyname (){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("A");
    
}
saymyname()   // saymyname(): function execution  // saymyname : function reference 



function addTwoNumbers(number1, number2){
    console.log(number1 + number2);

}
addTwoNumbers(6,9)  // output : 15 
addTwoNumbers(6,"a") // output : 6a
addTwoNumbers(6,null) // output : 6 



function addTwoNumbers(number1, number2){
    let result = number1 + number2  // we can return the result by calling a variable and return the variablename
   return result 
   return number1 + number2 // we can directly return the result 
}
const result = addTwoNumbers(5,6)
console.log("Result:" , result);  // output: Result: 11



function  loginUserMessage (username){
    return `${username} just logged in`   // sting interpolation 
}
console.log((loginUserMessage("barsha")));  // output : barsha just logged in
console.log((loginUserMessage("")));  //  passing parameter as empty string then the output will be : just logged in
console.log((loginUserMessage()));  //passing no parameter then the output will be  :undefined just logged in


//IF CONDITION
function  loginUserMessage (username){
    if (username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`   // sting interpolation 
}
console.log((loginUserMessage()));   /* output : please enter a username , undefined*/


// PASSING PARAMETERS

function  loginUserMessage (username= "priya"){
    if (username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`   
}

console.log((loginUserMessage()));  // output : priya just logged in

// changing parameters
console.log((loginUserMessage("BARSHA")));  // OUTPUT : BARSHA just logged in

//... (rest or spread operator)
function calculateCartPrice(...numb1){
    return numb1
}
console.log(calculateCartPrice(900,300,600))   // output : [ 900, 300, 600 ]


function calculateCartPrice(val1,val2,...numb1){
    return numb1
}
console.log(calculateCartPrice(900,300,600))   // output : [600]

// The function calculateCartPrice returns an array of all arguments passed to it after the first, two, so console.log(calculateCartPrice(900, 300, 600)) outputs [600].

const user = {
    username : "priyanka",
    price : 2999,
}

function handleObject(anyobject){
    console.log(`username ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)  // output : username priyanka and price is 2999



const user1 = {
    username : "priyanka",
    prices : 2999,
}

function handleObject(anyobject){
    console.log(`username ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user1)  // output : username priyanka and price is undefined.


// DIRECT TECHNIQUES (for objects)

handleObject({
    username:"sam",
    price:699,
})                      // output : username sam and price is 699

//(for array)

const myNewarray = [600,900,300,700]

function returnSecondValue(getArray) {
    return getArray[3]
}
console.log(returnSecondValue(myNewarray));    // output : 700