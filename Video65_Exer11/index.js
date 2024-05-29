
// factorial using reduce

// let arr = [6,5,4,3,2,1]

// const red = (a,b)=>{
//     return a*b
// }
// console.log(arr.reduce(red))

// Using another approach (Harry)

let a= 6
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b)=>{
        return a*b
    })
    return c
}

factorial (a)

function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
        
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))

// factorial using loop

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[a*b];
//     return arr*[i]
//     console.log(element)
// }