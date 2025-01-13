function multipleBy5(num) {
    return num*5
    // this.num = num
    
}
multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username, score) {
      this.username = username
      this.score = score
}

createUser.prototype.increment = function () {
   this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai =  createUser("chai", 50)
const tea = new createUser("tea", 300)

chai.printMe()

/*Creates a New Object: It creates a new, empty object.

Sets Up this Binding: Inside the constructor function, this refers to the newly created object.

Inherits Properties: The new object inherits properties and methods from the constructor function’s prototype.

Returns the Object: The constructor function automatically returns the new object if there isn’t an explicit return statement.

*/ 