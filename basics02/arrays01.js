//Array : JS array are resizable and can contain a mix of different datatypes.
// the first element of array is at index 0.
// JS arrays are not associative array so array elements can not be accessed using arbitary string as indexes.
// JS array-copy-operation create shallow copies (copy whose properties share the same reference )
 const myArr = [ 0,1,2,3,4,,5, true,"priyanka"]
 console.log(myArr["7"]); // output: true

 const myheros = ["shaktiman ", "naagraj"]
const myarr2 = new Array (1,2,3,4)
console.log(myArr[2]); // output: 2

 // concat()
 const array1 = [1,2,3]
 const array2 = [4,5,6]
 const array3 = [7,8,9]
 // using concat() to merge arrays
 console.log(array1.concat(array2,array3));


 //copyWithin(): is used to copy a sequence of array elements within an array.
 // syntax; (target,start,end) 
 //target: The index at which to start copying the sequence.
 //start: The index from which to start copying elements.
 //end: The index at which to stop copying elements . If not provided, the method copies up to the end of the array.

const array = [9,8,7,6,5,4,3,2,1]
 console.log(array.copyWithin(2,4));


 // Array Methods

 // 1> push() : used to add one or more elements to the end of an array. 
 myArray = [1,2,3,4,5,6,7,8,9]
 myArray.push(10)
 console.log(myArray);    //  output : [1, 2, 3, 4,  5,,6, 7, 8, 9, 10] it simply just added 10 into the array.

// // pop () : used on arrays to remove and return the last element from an array. 
myArray1 =[9,8,7,6,5,4,3,2,1]
 myArray1.pop()   
 console.log(myArray1); // output: [9,8,7,6,5,4,3,2]  it just simply removed 1 from the array.


// unshift(): Adds one or more elements to the beginning of an array.
myArray2 = [0,1,2,3,4,5]
 myArray2.unshift(8) 
 console.log(myArray2 );   // output : [  8, 0, 1, 2,3, 4, 5] it added a element i.e 8 in the beginning.


 // shift () : Removes and returns the first element from an array.
myArray3 = [3.,4,5,6,7]
myArray3.shift()
console.log(myArray3); // output : [ 4, 5, 6, 7 ] it removed the 1st element i.e 3

// includes(): Determines whether an array contains a specified element. It returns a boolean value (true or false).
myArray4 =[5,7,8,22,90]
console.log(myArray4.includes(22)); // output:true
console.log(myArray4.includes(2));  // output:false

// indexof() : used to finds the first index of a specified element in an array. The index of the first occurrence of the specified element, or -1 if it is not found.
myArray5 =[8,9,60,89]
console.log(myArray5.indexOf(9));  // output: 1 (9 is at the indexof 1)

// .join(): used on arrays to concatenate (combine) all the elements of an array into a single string. You can specify a separator between the elements in the resulting string.
myArray6 = [1,2,4,6,8,9,0,55,66]
const newArr = myArray6.join()
console.log(myArray6); // output : [1, 2,  4,  6, 8, 9, 0, 55, 66] output will be in array formate
console.log(newArr);   // output : 1,2,4,6,8,9,0,55,66 (output wiil be in the string formate)
console.log(typeof newArr); // output : string

let newarr1 = myArray6.join(" ")
console.log(newarr1);  // output: 1 2 4 6 8 9 0 55 66  // Join the elements of the array using a space as the separator


// Slice , splice 

// slice () : method is used to create a shallow copy of a portion of an array into a new array object.
myArray7 = [3,6,8,9]
console.log( "A ", myArray7); // output: A  [ 3, 6, 8, 9 ]

const myn1 = myArray7. slice(1,3)
console.log(myn1);   // output:[ 6, 8 ]
console.log("B ", myArray7); // output: B  [ 3, 6, 8, 9 ]

// splice () : used to change the contents of an array by removing or replacing existing elements and/or adding new elements.
const myn2 = myArray7. splice(1,3)
console.log(myn2); //output: [ 6, 8, 9 ]
console.log("C", myArray7); // output: C [ 3 ]
