class User {
    constructor (username) {
        this.username = username
    }
    logMe(){
        console.log(`USERNAME  is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course is added by ${this.username}`)
    }
}


const study = new Teacher ("sir" , "pathshala@gmail.com", "8269")

study.addCourse()
const Student = new User("Student")
Student.logMe()
console.log(study instanceof User);  // true