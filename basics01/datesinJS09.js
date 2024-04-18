 // DATES : Date object, which provides methods for creating, manipulating, and formatting dates and times

 let myDate = new Date ()
 console.log(myDate);    // output: 2024-04-18T13:37:24.158Z

 
  console.log(myDate.toString());  // output: Thu Apr 18 2024 19:09:22 GMT+0530 (India Standard Time)
   //converts a Date object into a string representation.

  console.log(myDate.toDateString()); // output: Thu Apr 18 2024
   //It returns the date portion of a Date object as a human-readable string in the format "Day Month Date Year".

 console.log(myDate.toISOString());  // output: 2024-04-18T13:43:32.392Z
 //It converts a Date object into a string following the ISO 8601 extended format.

  console.log(myDate.toLocaleString());  // output: 18/4/2024, 7:14:41 pm
  // It returns a string representing the date and time portion of a Date object based on the current locale settings of the user's environment.

  console.log(myDate.toLocaleDateString()); // output: 18/4/2024
  //It is Similar to toLocaleString(), but it only returns the date portion of the Date object according to the locale settings.

  console.log(myDate.toJSON());  // output : 2024-04-18T13:49:54.885Z
  //It serializes the Date object into a JSON-formatted string

   console.log(typeof myDate);  // output: object

   // FOR SPECIFIC DECLARATION 

  // formate1 (YEAR,MONTH,DATE)
   let mycreatedDate = new Date (2024,0,23)
   console.log(mycreatedDate); // 2024-01-22T18:30:00.000Z
   console.log(mycreatedDate.toDateString()); // output: Tue Jan 23 2024 ( in JS months count starts from 0 i.e jan=0, feb = 1 and so on.)

   // formate2 (year,month,date,hour,minute,sec,am/pm)
  let mycreatedDate1 = new Date (2024,0,23, 5,3) 
  console.log(mycreatedDate1.toLocaleString());  // output: 23/1/2024, 5:03:00 am
 
 //formate3 (YY-MM-DD)
   let mycreatedDate2 = new Date ("2024-01-14")
  console.log(mycreatedDate2.toLocaleString()); // output: 14/1/2024, 5:30:00 am
 
  // formate4 (MM-DD-YY)
   let mycreatedDate3 = new Date ("01-14-2024")

   let myTimeStamp = Date.now ()
   console.log(myTimeStamp); // output: 1713450362167
 // now() returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970.


  console.log(mycreatedDate3.getTime()); // output: 1705170600000
   // getTime() method returns the numeric value corresponding to the time represented by the Date object.



  //description>-converting into milisecond by dividing 1000.

   console.log(Date.now()/1000); // output:1713451064.29 
 console.log( Math.floor(Date.now()/1000)); // output : 1713451210 


  // TO FIND SPECIFIC OR INDIVIDUAL INFORMATION
  let newdate = new Date()
  console.log(newdate.getMonth()); // output: 3 (i.e april because in JS month counting starts from 0)
  console.log(newdate.getDate()); // output : 18
  console.log(newdate.getDay()); // output : 4 (i.e thursday)
  console.log(newdate.getFullYear()); // output: 2024

console.log(`${newdate.getFullYear()} and the month ${newdate.getMonth()} and finally the date is ${newdate.getDate()}`);
// output: 2024 and the month 3 and finally the date is 18.


 let p = newdate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'UTC'
})
console.log(p); // output:Thursday
