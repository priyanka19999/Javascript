//Reduce Method:
//The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

/*SYNTAX:
const result = array.reduce(callback(accumulator, element[, index[, array]])[, initialValue])

callback: Function to execute on each element in the array, taking four arguments:
accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
element: The current element being processed.
index (optional): The index of the current element.
array (optional): The array reduce was called upon.
initialValue (optional): A value to use as the first argument to the first call of the callback.
*/

EXAMPLE:1
const number = [1,2,3,]
const mytotal = number.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval: ${currval}`);  // acc:0 and currval: 1, acc:1 and currval: 2, acc:3 and currval: 3
    return acc + currval
}, 0)    // accumulator value can be set as 0 or any number

console.log(mytotal);  //output: 6



EXAMPLE:2 // Arrow function
const myNums = [1,2,3,]
const total = myNums.reduce((acc,curr) => acc + curr, 0 )
console.log(total); // output: 6


EXAMPLE:3

const shoppingCart =[
    {
        itemName: "js course",
        price : 3999,
    },

    {
        itemName: "py course",
        price : 999,
    },

    {
        itemName: "Web dev course",
        price : 4999,
    },

    {
        itemName: "Data science course",
        price : 12999,
    },
]

const priceTopay = shoppingCart.reduce((acc,item) => acc + item.price ,0)
console.log(priceTopay); //output:22996


// Combining filter, map, and reduce
//These methods can be combined to perform complex operations on arrays.

EXAMPLE:1 // (Filtering, Mapping, and Reducing)

const states = [
    {
    Name: "Odisha ",
    capital:  "Bhubaneswar",
    Population: 4600

    },
    
    {
    Name: "Assam  ",
    capital:  "Dispur",
    Population: 3600

    },

    {
    Name: "Goa ",
    capital:   "Panaji",
    Population: 1500
    },

    {
    Name: "West Bengal ",
    capital:  "Kolkata r",
    Population: 1800
    },

    {
    Name: "Maharashtra  ",
    capital:  "Mumbai",
    Population: 1400

    },
];

const TotalofStates = states
.filter((sts) => sts.Population >= "1200" ) //filter the population 1200 or more 
.map((sts) => sts.Name) // map to Names
.reduce((acc,states) => acc + states.Population, 0)  // sum the population
console.log(TotalofStates);  // output: 12900
