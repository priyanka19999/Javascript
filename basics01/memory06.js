/*Memory
Stack (primitive), Heap (Non-primitive)
 in stack we get a copy of the element and whatever the changes will happen it will happen in the copy element.
 in heap whatever the changes will occur it will occur in original element. 
*/

//stack 

let myname = "priyanka"
let anothername = myname
anothername ="barsha"
console.log(myname);    // priyanka
console.log(anothername); // barsha


//heap

let user = {
    userEmail: "user@google.com",
    upi:"user@ybl"
}

let user2 = user
user2.gmail ="abc@gmail.com"
console.log(user.gmail);
console.log(user2.gmail);