// function hello() {
//     console.log("hello")
// }

// function printName() {
//     console.log("Muhammad Ayan")
// }

// function print_1to9() {
//     for (let i = 1; i <= 9; i++) {
//         console.log(i)
//     }
// }

// function isAdult(){
//     let age = 28;
//     if(age < 18){
//         console.log("It's Minor")
//     }
//     else{
//         console.log("Adult")
//     }
// }

// print_1to9();
// printName();
// hello();
// isAdult();

//---Q1(Poem)
// function printPoem(){
//     console.log("Jonny Jonny")
//     console.log("Yes Papa")
// }

// printPoem();

//---Q2(Dice)

// function dice(){
//         let rand = Math.floor(Math.random() * 6)+1;
//         console.log(rand);
// }

// dice();

//--------------Function With Arguments------------------

// function printName(name) {
//     console.log(name);

// }

// printName("Ayan");


// function printInfo(name, age, gender) {
//     console.log(`${name}'s age is ${age} and gender is ${gender}`);

// }

// printInfo("Ayan", 23, "Male");
// printInfo("Habiba", 11);


//-----------Print Sum
// function sum(a, b){
//     console.log(a+b);
// }

// sum(1, 2);
// sum(10, 20);
// sum(7, 9);

//----------Print Avg
// function clcAvg (a, b, c, d){
//     console.log(a + b + c + d/4);

// }

// clcAvg(2,4,6,8)

//---------Q6-Print_Table
// function printTable(n){
//     for(let i= n; i<= n*10; i++){
//         console.log(n);

//     }
// }

// printTable(3)


//-----------------Scope
// let sum = 54;// Global Scope

// function calSum(a, b){
//     let sum = a+b;  //Function Scope
//     console.log(sum)
// }

// calSum(1, 2);
// console.log(sum);

// -----------------Block_Scope
//  for (let i = 1; i<=5; i++){
//     console.log(i); // access within the block

//  }

//  console.log(i);  // can't be accessed due to out of block

//------------------Lexical_Scope
// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {
//         console.log(x);
//     }
//     innerFunc();
// }

//--Q7

// let greet = "hello"; //global scope

// function changeGreet() { // function scope
//     let greet = "Assalamualikum";
//     console.log(greet);

//     function innerGreet() {
//         console.log(greet);  //lexical scope

//     }
//     innerGreet();
// }


// console.log(greet);

// changeGreet();

//--------------Function Expression
// let name = "Ayan"

// let sum = function (a, b) {
//     return a + b;
// }

// let hello = function () {
//     console.log("hello");

// }

// hello = function () {
//     console.log("Assalamualikum");

// }

//-----------------Higher Order Functions

// function multipleGreet(func, count){ //higher order functions
//     for (i=1; i<=n; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("Assalmualikum");
    
// }

// multipleGreet(greet, 4);

//