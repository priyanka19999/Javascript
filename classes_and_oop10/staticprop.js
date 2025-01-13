class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}


const sai = new user ("Sai")
//console.log(sai.createId());  

class Teacher extends user {
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const Realme = new Teacher ("Realme", "real@me.com")
Realme.logMe();
