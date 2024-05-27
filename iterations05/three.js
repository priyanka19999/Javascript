// For....of loop : The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
/*SYNTAX
for (const iterator of object) {

}*/

EXAMPLE:1  //ARRAY

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}                      // output : 1,2,3,4,5,    

EXAMPLE:2  //STRING

const greetings = "Hello Summer"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps : The Map object holds key-value pairs. it is unique in the Map's collection.

const map = new Map()
map.set ('IN','india') 
map.set ('IN','india')   // output will be only unique value. no duplicate values are allowed.
map.set ('USA','United State Of America')
map.set ('Fr','France')
console.log(map);                         /* output:  
                                             Map(3) {
                                                    'IN' => 'india',
                                                   'USA' => 'United State Of America',
                                                    'Fr' => 'France'
                                                      }  */

EXAMPLE:3 //MAPS

for (const [key,value] of map) {
    console.log(key,':-', value) ;    
    
}                                           /* output:
                                               IN :- india
                                               USA :- United State Of America
                                                Fr :- France */
                                                
EXAMPLE:3 //OBJECTS
const myObject = {
    'game1' : 'NFS',
   'game2' : 'spiderman'
}

for (const [key,value] of myObject) {
    console.log(key, ':-' , value);      // Error: myObject is not iterable
}
