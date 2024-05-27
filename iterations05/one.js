//for loop :
//It includes three expressions: initialization, condition, and final expression.


for (let i = 0; i < 10; i++) {
    const element = i;                                  // (ctrl + D = duplicate )
    console.log(element);  //ouput: 0,1,2,3,4,5,6,7,8,9

}


for (let i = 0; i < 10; i++) {
    const element = i; 
    if (element==5) {
        console.log("5 is the best number");   // 0,1,2,3,4,5 is the best number,5,6,7,8,9
    }
    console.log(element);
}


for (let i = 0; i <=10; i++) {
    console.log(`outer loop value : ${i}`);
    for (let j = 0; j <=10; j++) {
        //console.log(`inner loop value : ${j} and inner loop value : ${i}`);
    
        console.log(i + "*" +j+ "=" + i*j);  // 0-10 table, will be the output
    }
}


// ARRAY in for loop

let myarray =["flash", "batman","superman"]
console.log(myarray.length);  // output: 3

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element); // output: flash ,batman, superman
}


// Loop Control Statements : break and continue

//break: Terminates the loop entirely.
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 is detected");
        break ;                                      // (copypaste shotcut : alt+shift+down arrow)
    }
    console.log(`value of i is ${i}`);             /*output:- value of i is 1, value of i is 2, value of i is 3,value of i is 4, 5 is detected */
}
                                            
// continue: Skips the current iteration and proceeds to the next iteration.
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 is detected");
        continue             
    }
    console.log(`value of i is ${i}`);
}                 