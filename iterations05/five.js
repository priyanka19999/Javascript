//HIGH ORDER ARRAY LOOP: refer to methods that allow you to iterate over arrays in a functional programming style. These methods include forEach, map, filter, reduce, some, every, and others

//foreach: Executes a provided function once for each array element.
EXAMPLE:1
const coding = ["js","ruby","python","java","cpp"]
coding.forEach (function  (item) {
 console.log(item);    // output: js,ruby,python,java,cpp
})

EXAMPLE:2 // Call back function in foreach() 
coding.forEach((item) => {
    console.log(item);       // output: js,ruby,python,java,cpp
})

EXAMPLE:3 // function in foreach()
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)    // output: js,ruby,python,java,cpp

EXAMPLE:4 //item,index,array
coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})

EXAMPLE:5 //objects in foreach()
const myCoding = [{
    languageName : "javascrript",
    languageFileName: "js"
},
 {
    languageName : "java",
    languageFileName: "java"
},
 {
    languageName : "python",
    languageFileName: "py"
},
]
myCoding.forEach((item) => {
    console.log(item.languageName);   // output: javascript, java, python
})