/*switch Statement:
The switch statement executes a block of code depending on different cases.
SYNTAX:

    switch(expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression doesn't match any case
}
*/

EXAMPLE:1
const month = 3
switch (month) {
    case 1:
       console.log("January"); 
        break;
    case 2:
       console.log("febuary"); 
        break;
    case 3:
       console.log("march"); 
        break;
    case 4:
       console.log("april"); 
        break;

    default:
        console.log("default case matched");
        break;                          // output : mmarch (month = 3 already given)
}



EXAMPLE:2
const Month = "april"
switch (Month) {
    case "Jan":
       console.log("January"); 
        break;
    case "feb":
       console.log("febuary"); 
        break;
    case "mar":
       console.log("march"); 
        break;
    case "april":
       console.log("april"); 
        break;

    default:
        console.log("default case matched");
        break;          
      }         // output : april 