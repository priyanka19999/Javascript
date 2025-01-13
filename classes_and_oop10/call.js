function SetUsername (username){
    //complex DB call 
    this.username = username
    console.log("called");
}

function createUser (username , email , password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const priya = new createUser ("Priya" , "priya@fb.com", "1234")
console.log(priya);