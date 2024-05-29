// foreach()
const coding = ["js","ruby","python","java","cpp"]

const values = coding.forEach (  (item) => {
 // console.log(item);    // output: undefined
return item  
})
console.log(values); // output: undefined  // here it doesnot return the value



//1>filter() Method : The filter method creates a new array with all elements that pass the test implemented by the provided function.

/* SYNTAX: const newArray = array.filter(callback(element[, index[, array]])[, thisArg])

callback: Function that tests each element. Return true to keep the element, false otherwise.
element: The current element being processed.
index (optional): The index of the current element.
array (optional): The array filter was called upon.
thisArg (optional): Value to use as this when executing the callback.

*/ 

EXAMPLE:1 
const numbers = [1,2,3,4,5,6,7,8,9,10]
const mynumbers = numbers.filter((num)=>num >4);
console.log(mynumbers);  // [ 5, 6, 7, 8, 9, 10 ]

EXAMPLE:2
const num = [1,2,3,4,5,6,7,8,9,10]
const mynum = num.filter((num)=> {     // when we use {} then we have to use "return" 
 return num > 4
})
console.log(mynum);  // [ 5, 6, 7, 8, 9, 10 ]

EXAMPLE:3  // using foreach()

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = []
myNums.forEach((num) => {
    if (num>4) {
        newNums.push(num)
    }
})
console.log(newNums);  // [5,6,7,8,9,10]


EXAMPLE:4

const books = [
    {title: 'Book One' , genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two' , genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three' , genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four' , genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five' , genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six' , genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven' , genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight' , genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine' , genre: 'Non-Fiction', publish: 1981, edition: 1989},

];

const userBooks = books.filter((bk) => bk.genre === 'History')
console.log(userBooks);   //output: book three & book seven details

const userBook = books.filter((bk)=> bk.publish >= 2000) // filter the book whos publish year 2000 or greater than 
console.log(userBook);  //output: book five & book eight details

const userBook1 = books.filter((bk)=> bk.publish >= 1995 && bk.genre ==="History")  // filter out the book more than 1995 and have a particular genere of history
console.log(userBook1); // output : book three details