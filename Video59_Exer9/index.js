
// const prompt = require('prompt-sync')();
// // Input Numbers
// let a = Number(prompt("Enter your number 1 "));
// let b = Number(prompt("Enter your number 2 "));
// // Random Number

// let random = Math.random();

// let Addition = a+b ;
// let Subtraction = a-b;
// let Multiplication =a*b;
// let Division= a/b;
// let Exponentiation = a**b;

// // Condition
// if (random <0.1){
//     console.log("Addition Calculation : " , a-b) ;
//     console.log("Subtraction Calculation : " , a/b) ;
//     console.log("Multiplication Calculation : " , a+b );
//     console.log("Division Calculation : " ,a**b ) ;
// }

// else{ 
//     console.log("Addition Calculation : " , a+b) ;
//     console.log("Subtraction Calculation : " , a-b) ;
//     console.log("Multiplication Calculation : " , a*b );
//     console.log("Division Calculation : " ,a**b ) ;
// }
const prompt = require('prompt-sync')();
let random = Math.random();
console.log(random);

let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
   
    console.log('The Result is ${a} ${c} ${b}');
    console.log(`The Result is ${eval(`${a} ${c} ${b}`)}`)

} else {
    c = obj[c];
    console.log(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}