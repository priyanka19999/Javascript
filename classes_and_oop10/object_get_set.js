const User = {
   _email : "b@priyanka.com",
   _password: "abc",

//FOR EMAIL
get email (){
    return this._email.toUpperCase()
},
set email (value){
   this._email = value
   },

   
//FOR PASSWORD

get password (){
    return this._password.toUpperCase()
},
set password (value){
   this._password = value
   },

}
const tea = Object.create(User)
console.log(tea.password);
console.log(tea.email);

