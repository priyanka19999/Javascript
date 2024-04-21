const marvel_heros = [ "thor", "ironman" ,"spiderman"]
 const dc_heros = [ "superman", "flash" ,"batman"]

marvel_heros. push(dc_heros)
 console.log(marvel_heros); // output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][2]); // output : batsman (marvel_heros[3] refers to the fourth element in the marvel_heros array, which is the nested array dc_heros. Then, [2] refers to the third element in the nested array, which is 'batman')

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros); // output: [ 'thor', 'ironman', 'spiderman',  'superman', 'flash', 'batman' ]
// spread operator ('...')
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log( all_new_heros); // output : [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman]

//.flat(method flattens a nested array structure up to a specified depth, creating a new array with all nested array elements concatenated into it.)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // output: [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

//.isArray (): used to check whether the given value is an array.  returns true if the provided value is an array, and false otherwise.)
console.log (Array.isArray('priya')); // output:false

// .from() :(creates a new array from an array-like or iterable object.)
console.log(Array.from('priya'));   // output: [ 'p', 'r', 'i', 'y', 'a' ]
console.log(Array.from({name :'priya'})); // output :[]


//.of(): (creates a new array instance with a variable number of arguments, regardless of the type of arguments.)
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of (score1,score2,score3));  // output:[100,200,300]

