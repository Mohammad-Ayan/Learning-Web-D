let a = "Jerry"

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log(a.length);

let real_name = "Hussain"
let friend = "Tahir"

console.log("My name is: "+ real_name + " My friend name is: " + friend)
console.log(`My name is: ${real_name} My friend name is: ${friend}`)  //Template_Literals

let b = "Arham"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(1, 4))

console.log(b.replace("ham", "zoo"))
console.log(b.concat(" ",a, " are both colleague"))

console.log(b.startsWith("rr"))  //false
console.log(b.endsWith("am"))   //true