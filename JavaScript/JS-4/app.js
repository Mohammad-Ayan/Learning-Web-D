// let arr = [1, 2, 3, 4, 5]

//--- using Arrow function---
// arr.forEach((el) =>{
//     console.log(el);

// })

// OR

// arr.forEach(function (el) {
//     console.log(el);
// });

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

// let arr = [{
//     name: "ayan",
//     marks: 87,
// },
// {
//     name: "anzar",
//     marks: 82,
// },
// {
//     name: "hadi",
//     marks: 59,
// }]

// arr.forEach((student) => {
//     console.log(student.marks);

// });

// ----------map--------------

let numb = [1, 2, 3, 4];

let double = numb.map((el) => {
    return el * 2;
});

 let student = [
    {
        name: "ayan",
        marks: 87,
    },
    {
        name: "anzar",
        marks: 82,
    },
    {
        name: "hadi",
        marks: 59,
    }];

    let gpa = student.map((el) => {
        return el.marks / 10;
    });

//----------Filter-------

// let nums = [1, 2, 3 ,4, 5, 6, 7, 8, 10 , 11];
// let  ans = nums.filter((el) => {
//     return el%2 == 0;  //even -> true, odd-> false
// })

//-----------Every---------

[2, 4, 6].every ((el) => el%2 ==0);   true

[2, 3, 4, 5, 6].every ((el) => el%2 ==0);  //false

//-----------Reduce---------

// let nums = [2, 4, 6, 8];
// let finalVal = nums.reduce((res, el) =>res + el);
// console.log(finalVal);

//-----------Maximum in Array(using reduse)----------

// -using loop
// let arr = [1, 2, 4, 2, 7, 2, 9, 3, 5];

// let max = -1;

// for(let i = 0; i < arr.length; i++){
//     if (max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// -using reduce

let max = arr.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});

// console.log(max);

// ---Prac Ques---
//Q1-- Check if numbers in our array are multiple of 10 or not.

// let nums = [10, 20, 30, 40];
// let ans  = nums.every((el) => el % 10 == 0);
// console.log(ans);

//Q2--.Create a function to find the min numvber in an array

function getNum(nums){
    let min = nums.reduce((min, el) => {
        if (min < el) {
            return el;
        } else {
            return el;
        }
    });
    return min;
}

let nums = [10, 20, 30, 40];

//------------Default Parameter---------

function sum (a = 4, b){
    return a + b;
}
sum(1, 3); // 4
sum(2);  // a = 4, b = undefined (argument are passed by order)

//------------Spread------------

let arr = [2, 4, 5, 3, 7, 1, 9];
Math.min(...arr);  //1

console.log(...arr);  //2 4 5 3 7 1 9

// // ---Spread (with Array Literals)---

// let arr = [2, 4, 5, 3, 7, 1, 9];
// let newArr = [...arr];

// console.log(newArr);


// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8];
// let nums = [...odd, ...even]; //1, 3, 5, 7, 9, 2, 4, 6, 8

//---Spread (with Object Literals)---

// const data = {
//     email: "ayan123@gmail.com",
//     password: "abcd",
// };

// const dataCopy = {...data};  //  email: "ayan123@gmail.com",password: "abcd",

// let arr = [1, 2, 3, 4, 5]; //val
// let obj1 = {...arr};  //obj -> key:val (index:value)


//-----Rest-----

function sum (...args){ //arguments
    for(let i = 0; i<args.length; i++){
        console.log("you gave us:", args[i]);      
    }
}


// --argument-- (not array but collection)
function min(a, b, c, d){
    console.log(arguments);  // 1,2,3,4
}

function sum(...args) {
    return args.reduce((sum, el) => sum + el)
}

function min(...args) {
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}

//------Destructuring-----

//let names = ["ayan", "tony", "stiver", "hadi", "abc" ,"fahad", "xyz"];
//let winner = names[0];
//let runnerup = names[1];
//let secondRunnerup = names[2];

//let [winner, runnerup, secondRunnerup, ...others] = names;

//---Destructuring (objects)---

// const student = {
//     name: "aayan",
//     age: "14",
//     class: "9",
//     subjects: ["hindi", "english", "math","science"],
//     username:"ayan@234",
//     password: "kuBatai"
// };

// // let {username, password} = student;
// let {username: user, password: secret} = student;

//-----------Prac_Ques---------

//Q1.-Square and sum the array elements using the arrow function
// and then find the average of the array

let num = [1, 2, 3, 4];

const square = num.map((num) => num * num);
console.log(square);


let sum = square.reduce((num,el) => 
    num + el);

let avg = sum / num.length;
console.log(avg);

//Qs2. Create a new array using the map function whose each element
 //is equal to the original element plus 5.

// let num = [1, 2, 3, 4];

// const newNum = num.map((num) => num + 5);
// console.log(newNum);

//Qs3. Create a new array whose elements are in uppercase 
//of words present in the original array

let strings = ["adam", "akbar", "ayan", "aryan"];
console.log(strings.map((string) => string.toUpperCase()));

//Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
//variable number of arguments. The function should return a new array with the original
//array values and all of the additional arguments doubled

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...arr.map ((v) => v * 2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4); // [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4);  // [2, 20, 8]

//Qs5. Write a function called mergeObjects that accepts two objects and returns a new
//object which contains all the keys and values of the first object and second object

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2});
mergeObjects ({a: 1, b: 2}, {c: 3, d:4});  // {a:1, b:2, c:3, d=4}