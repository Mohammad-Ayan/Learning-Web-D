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

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el * 2;
// });

//  let student = [
//     {
//         name: "ayan",
//         marks: 87,
//     },
//     {
//         name: "anzar",
//         marks: 82,
//     },
//     {
//         name: "hadi",
//         marks: 59,
//     }];

//     let gpa = student.map((el) => {
//         return el.marks / 10;
//     });

//----------Filter-------

// let nums = [1, 2, 3 ,4, 5, 6, 7, 8, 10 , 11];
// let  ans = nums.filter((el) => {
//     return el%2 == 0;  //even -> true, odd-> false
// })

//-----------Every---------

//[2, 4, 6].every ((el) => el%2 ==0);   true

//[2, 3, 4, 5, 6].every ((el) => el%2 ==0);  //false

//-----------Reduce---------

// let nums = [2, 4, 6, 8];
// let finalVal = nums.reduce((res, el) =>res + el);
// console.log(finalVal);

//-----------Maximum in Array(using reduse)----------

// -using loop
let arr = [1, 2, 4, 2, 7, 2, 9, 3, 5];

// let max = -1;

// for(let i = 0; i < arr.length; i++){
//     if (max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// -using reduce

// let max = arr.reduce((max, el) => {
//     if (max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(max);

// ---Prac Ques---
//Q1-- Check if numbers in our array are multiple of 10 or not.

// let nums = [10, 20, 30, 40];
// let ans  = nums.every((el) => el % 10 == 0);
// console.log(ans);

//Q2--.Create a function to find the min numvber in an array

// function getNum(nums){
//     let min = nums.reduce((min, el) => {
//         if (min < el) {
//             return el;
//         } else {
//             return el;
//         }
//     });
//     return min;
// }

// let nums = [10, 20, 30, 40];

//------------Default Parameter---------

// function sum (a = 4, b){
//     return a + b;
// }
// sum(1, 3); // 4
// sum(2);  // a = 4, b = undefined (argument are passed by order)

//------------Spread-------------