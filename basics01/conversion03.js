
 let pass   = 33
  console.log(typeof pass);
  console.log(typeof (pass));

  let data = "33"
  console.log(typeof data); // string
 console.log(typeof (data)); // string

let valueInNMber = Number(data) 
 console.log(typeof valueInNMber ); // number
 console.log(valueInNMber); // 33


 let one  = "33abcd"
 console.log(typeof one ); // stringc
 console.log(typeof (one)); //string

  let valueInnUmber = Number(one) //
 console.log(typeof valueInnUmber );//number
    console.log(valueInnUmber); //NaN

 let SCORE = null
  console.log(typeof SCORE);  // object
  console.log(typeof (SCORE)); // object

  let valueinNmber = Number(SCORE)
 console.log(typeof valueinNmber ); // number
console.log(valueinNmber); // 0


let Score = undefined
 console.log(typeof Score); // undefined
 console.log(typeof (Score)); //undefined

  let ValueInNmber = Number(score) //
 console.log(typeof ValueInNmber );//number
    console.log(ValueInNmber); //NaN


let score = true
  console.log(typeof score); // boolean
  console.log(typeof (score)); //boolean

 let valueInNmber = Number(score) 
  console.log(typeof valueInNmber );//number
   console.log(valueInNmber); //1



   // "33"=> 33
   //"33abc"=> NaN 
   // true=> 1; false=> 0

   let amount = 1 
   let booleanamount = Boolean(amount)
   console.log(booleanamount); // true


   let isloggedIn ="priyanka"
   let booleanisloggedIn = Boolean(isloggedIn)
   console.log(booleanisloggedIn); //true



   let isLoggedIn =""
   let booleanisLoggedIn = Boolean(isLoggedIn)
   console.log(booleanisLoggedIn); // false



   //1=> true
   // 0 => false 
   // "priyanka"=> true
 
   let somenumber= 369
   let stringsomenumber= String(somenumber)
   console.log(stringsomenumber);
   console.log(typeof stringsomenumber);
