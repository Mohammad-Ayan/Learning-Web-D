// let rand = Math.random()
// let first, second, third;


// if (rand < 0.33){
//     first = "Crazy"
// }
// else if (rand < 0.66){
//     first = "Amazing"
// }
// else{
//     first = "Fire"
// }
// //second no
// rand = Math.random()
// if (rand < 0.33){
//     second = "Engine"
// }
// else if (rand < 0.66){
//     second = "Food"
// }
// else{
//     second = "Garments"
// }
// // third no
// rand = Math.random()
// if (rand < 0.33){
//     third = "Bros"
// }
// else if (rand < 0.66){
//     third = "Limited"
// }
// else{
//     third = "Hub"
// }

// console.log(`${first} ${second} ${third}`)


//----------------------------- best approch---------------------

let obj1 =[
    "Crazy",
    "Amazing",
    "Fire"
]
let obj2 =[
    "Engine",
    "Food",
    "Garments"
]
let obj3 =[
    "Bros",
    "Limited",
    "Hub"
]

var ran1 = Math.floor(Math.random()*3+1)
var ran2 = Math.floor(Math.random()*3+1)
var ran3 = Math.floor(Math.random()*3+1)

console.log(obj1[ran1]+" "+obj2[ran2]+" "+obj3[ran3])