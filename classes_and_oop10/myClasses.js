//ES6 
class User {
    constructor (username, email , password){
        this.username = username;
        this.email= email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}: Priyanka`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const you = new User("Barshu", "ap@gmail.com", "coffee")
console.log(you.encryptPassword())
console.log(you.changeUsername());

// Behind the scene

function User (username, email , password){
        this.username = username;
        this.email= email;
        this.password = password;

}

User.prototype.encryptPassword = function () {
    return `${this.password}: Priyanka` 
}

User.prototype.changeUsername = function () {
   return `${this.username.toUpperCase()}`
}

const we = new User("Priyadarshani", "pb@gmail.com", "coffee")
console.log(we.encryptPassword())
console.log(we.changeUsername());


