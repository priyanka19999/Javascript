// Generate a random color  // changing the color of background

const randomColor = function(){
     const hex = "0123456789ABCDEF";
     let color= "#";
     for(i = 0 ; i< 6; i++) {
       color += hex[Math.floor(Math.random()*16)]
     };
   return color   
}
let intervalId; // calling globally
const startChangingColor= function(){
  function changeBgColor (){
    document.body.style.backgroundColor = randomColor();
  }
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000)
  }
//  intervalId = setInterval(changeBgColor, 1000)  // changing color in every 1000ms
}
const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId= null;
}
document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)


// changing color of the text 
let intervalId1;
const randomColor1 = function(){
  const hex = "0123456789ABCDEF";
  let color= "#";
  for(i = 0 ; i< 6; i++) {
    color += hex[Math.floor(Math.random()*16)]
  };
return color   
}

// function to change the text color
 function changetextColor() {
    document.querySelector("h1").style.color = randomColor1()
 }

 // function to start changing the text color 
 const startChangingColor1 = function () {
  if (!intervalId1) {
    intervalId1 = setInterval(changetextColor, 500)
 }
};

// function to stop changing the text color

const stopChangingColor1 = function(){
    clearInterval(intervalId1)
     intervalId1= null;
 }
// event listeners for the buttons
document.querySelector("#start").addEventListener("click",startChangingColor1)
document.querySelector("#stop").addEventListener("click",stopChangingColor1)
