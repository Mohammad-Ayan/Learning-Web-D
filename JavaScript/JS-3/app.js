
//-----------------`this` in JavaScript
const student = {
    neme: "ayan",
    age: 23,
    eng: 95,
    math: 93,
    phy: 90,
    getAvg() {
        console.log(this);  // this is student object
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}

function getAvg() {
    console.log(this);  // window object(browser window)
}

//---------------Try & Catch
console.log('hello');
console.log('hello');
try{
    console.log(a);
    } catch(err){
        console.log('caught an error.. a is not defined');
        console.log('err');

    }
console.log('hello');
console.log('hello');
console.log('hello');

//-------------------Miscellaneous Topics

// ------Arrow Function
const sum = (a, b) => {
    console.log(a + b);
};

//const cube = (n) => {
    return (n * n * n);
//};

const pow = (a, b) => {
    return a ** b;
};

const assalamualikum = () => {
    console.log("Assalamualikum");
};

// ------Implicit Return Arrow Function

const mul = (a, b) => (
    a*b
);

const cube = (n) => n * n * n;

//------------------Set Timeout

console.log('Hii there!');

setTimeout(() => {
    console.log('Al-Hamd Cottage');
}, 4000);

console.log('Welcome to');

// ----------------Set Interval

setInterval(() => {
console.log('Assalamualikum');
}, 4000);

let ide = setInterval(() => {
   console.log('Assalamualikum');
   }, 3000);
    console.log(ide);


let id2 = setInterval(() => {
        console.log('Walikum assalam');
        }, 2500);

        console.log(id2);


//-------------this with Arrrow Function 

const friend = {
    name: "ayan",
    marks: 95,
    prop: this,  //global scope

    getName: function () {
        console.log(this);  //parent's scope -> student
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks
    },
     getInfo1: function (){
        setTimeout(() =>{
            console.log(this);  //student
            }, 2000);
     },
     getInfo2: function (){
        setTimeout (function (){
            console.log(this);  //window
            }, 2000);
     },
};

//--------------------Prac Ques 
//-1.Write an arrow function that returns the square of a number 'n'

const sqr = (n) => (n * n);

console.log(sqr(4));

//-2.Write a function that prints "Hello World" 5 times at interval of 2s each

let id = setInterval (() => {
    console.log('Hello World');
    }, 2000);

    setTimeout(()=>{
        clearInterval(id);
    },10000);

//-Q3. Write an arrow function named arrayAverage() that accepts an array of numbers
//  and returns the average of those numbers.

const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total / arr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));

//-Q4. Write an arrow function named isEven() that takes a single number as argument
//  and returns if it is even or not.

let num = 4;

const isEven = () => num % 2 == 0;

//-Q5 Output of the following 
const object = {
    message: 'Hello, World!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);