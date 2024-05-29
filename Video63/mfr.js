// Map Filter Reduce

  // Creates a new array by performing some operation on each array element

  let arr = [3, 5, 12 ,23, 11]
//   let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
 // using map
 let newArr = arr.map((ele, index, array )=>{
    return ele**2
 })

console.log(newArr)

//-------------------------------------filter--------------------------------
//  filters an array with values that passes a test, Creates a new array

const greaterThanSeven = (ele) =>{
    if(ele>27){
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanSeven))

//-------------------------------reduce--------------------------------
 // reduce an array to single ans(after + - * /)

let arr2 = [2,4,6,8]

const red = (a, b)=>{
    return a*b
}

console.log(arr2.reduce(red))

