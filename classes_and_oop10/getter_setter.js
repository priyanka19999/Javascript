
// // GIVING ACCSSES
// class User {
//    constructor(email , password){
//     this.email = email ;
//     this.password = password
//    }
// }

// const barsha = new User ("b@barsha.ai" , "999")
// console.log(barsha.password);


//USE OF GETTER & SETTER

class User {
    constructor(email , password){
     this.email = email ;
     this.password = password
    }

    get email (){
        return this._email.toUpperCase()
    }
    set email (value){
     this._email = value.toUpperCase()
    }



    get password (){
        return this._password.toUpperCase()
        //return `${this._password}barsha` //BIPSHAbarsha
    }
    set password(value){
        this._password = value.toUpperCase()
    }
 }
 


 const barsha = new User ("b@barsha.ai" , "bipsha")
 console.log(barsha.password);
 console.log(barsha.email);