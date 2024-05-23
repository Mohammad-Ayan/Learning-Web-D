function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is also nice")
    console.log("Hey " + name + " you teach very nicely")
    console.log("Hey " + name + " you are nice!")
}

// nice("Ayan")

function sum(a, b, c = 10) {
    // console.log(a + b)
    return a + b + c
}

result1 = sum(3, 5)
result2 = sum(7, 5)
result3 = sum(13, 5)

console.log(result1)
console.log(result2)
console.log(result3)

// --------arrow_function---------

const func1 = (x)=>{
    console.log("I'm an arrow function" , x)
}

func1(34);
func1(44);
func1(54);