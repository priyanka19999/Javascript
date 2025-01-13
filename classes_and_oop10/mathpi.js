const descriptor = Object.getOwnPropertyDescriptor(Math ,"PI")
console.log(descriptor);

console.log(Math.PI);

const mynewobject = Object.create(null)
console.log(mynewobject); 


const chai ={
    name : "masala chai",
    price : "150",
    isAvailable: "true",


order : function() {
    console.log("chai nahi banni hai");
    
}
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai,"price",{
    // writable: false,
enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key , value] of Object.entries(chai)) {

    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    } 
}