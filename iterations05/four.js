// for...in Loop : The for...in loop is used to iterate over the enumerable properties of an object.
//SYNTAX
/*for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}*/

EXAMPLE: 1 // OBJECTS

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(key);  }// output : js,pp, rb, swift

// finding value for object
    for (const key in myObject) {
    console.log(`${key} shorcut is for ${myObject[key]}`);         // output : js shorcut is for javascript, cpp shorcut is for c++, rb shorcut is for ruby, swift shorcut is for swift by apple
}

EXAMPLE:2 // ARRAY
const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(key);      // output : 0,1,2,3,4 
}
// finding value for array
for (const key in programming) {
    console.log(programming[key]);      // output : js,rb,py,java,cpp
}


EXAMPLE:3 // MAPS 
const map = new Map()
map.set ('IN','india') 
map.set ('IN','india')  
map.set ('USA','United State Of America')
map.set ('Fr','France')

for (const key in map) {
    console.log(key);  // maps cant be irrteratable 
}