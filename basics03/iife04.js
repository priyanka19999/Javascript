// Immediately Invoked Function Expression (IIFE):- is a JavaScript function that runs as soon as it is defined. It is a common pattern used to create a local scope and avoid polluting the global namespace

/*SYNTAX : (Basic syntax)                       
                                              
(function() {                                                  
    // Your code here
})();


 SYNTAX : (using the arrow function )

 (() => {
    // Your code here
 })();

*/

//Basic Example: (named IIFE)

(function chai (){
    console.log(`DB CONNECTED`);
}) ();                           // output: DB CONNECTED


//IIFE with Parameters:

(function(name) {
    console.log("Hello, " + name + "!");
})("barsha");                    // output : Hello, barsha!


// IIFE using arrow function

( ()=>{
    console.log(`Hello world`);
} ) ();          // output:  Hello world

