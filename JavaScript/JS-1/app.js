const student = {
    name: "Ayan",
    age: 23,
    marks: "94.4",
    city: "Delhi"
}
console.log(student);
const student2 = ["Ayan", 23, "94.4"]
console.log(student2);
//We can store array under the object
const item = {
    price: 234,
    discount: 50,
    colors: ["red", "white"]     //We can store array under the object
}
console.log(item);
//How to iterate a particular property( key,value)
console.log(item["colors"]);
// how can we add a new (key value) in this student object
student.grade = "A";
console.log(student);
student.city = "Mumbai";
console.log(student);
// Another way
student["grade"] = "A";
console.log(student);
// how can change key value in this student object
student.marks = 98.8;
console.log(student);
//CREATE A OBJECT LITERALS FOR THE PROPERTIES OD THREAD/POST
const post = {
    username: "@zohrafatima",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]
}
console.log(post);
// how to get/access any particular key->values
console.log(post["content"]);
// JS AUTOMATICALLY CONVERTS KEYS INTO STRING
const obj = {
    1: "a",
    2: "b",
    null: "c",
    true: "d",
    undefined: "e"
}
console.log(obj);
console.log(obj["1"]);
console.log(obj[2]);
console.log(obj['null']);
//How to delete key value
delete obj.true;
console.log(obj);
// ---------------------NESTED OBJECTS(Object of objects)------------------
const classInfo = {
    zohra: {
        grade: "A+",
        city: "Delhi"
    },
    ayan: {
        grade: "B+",
        city: "Mumbai"
    },
    habiba: {
        grade: "0",
        city: "Delhi"
    }
};
console.log(classInfo);
console.log(classInfo.habiba);
console.log(classInfo.ayan);
console.log(classInfo.warisha);
console.log(classInfo.habiba.city);
//----------------------Array of objects------------------
const classInfo1 = [
    {
        name: "ayan",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "nasar",
        grade: "O",
        city: "Mumbai"
    },
    {
        name: "hadi",
        grade: "O+",
        city: "pune"
    },
];
console.log(classInfo1);
//Access a particular object under the array
console.log(classInfo1[0]);
console.log(classInfo1[1]);
console.log(classInfo1[2]);
//Access a particular object keys under the array
console.log(classInfo1[0].grade);
console.log(classInfo1[1].city);
console.log(classInfo1[2].name);
//--------------------Math Object-----------------
console.log(Math.random());
//--------------------Math Integers-----------------
let step1 = Math.random();
console.log(step1);
let step2 = step1 * 10;
console.log(step2);
let step3 = Math.floor(step2);
console.log(step3);
//When we want to include also 10
let step4 = step3 + 1;
console.log(step4);
//  Combine all three steps in single step
let step = Math.floor(Math.random() * 10);
console.log(step);

//Combine all four steps in single step
let stepp = Math.floor(Math.random() * 10) + 1;
console.log(stepp);
//-----------------PRACTICE QUESTION---------------
// Q1 Generate a random number between 1 and 100
let a = Math.floor(Math.random() * 100) + 1;
console.log(a);
// Q2 Generate a random number between 1 and 5
let b = Math.floor(Math.random() * 5) + 1;
console.log(b);
// Q3 Generate a random number between 21 and 25
let c = Math.floor(Math.random() * 5) + 21;
console.log(c);
// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].
const diceroll = Math.floor(Math.random() * 6) + 1;
console.log(diceroll);
// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.
const car = {
    name: " Marcedes",
    model: "Mercedes-Benz GLC Coupe",
    color: "cirrus silver"
}
console.log(car.name);
// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States
const Person = {
    name: "samad",
    age: 24,
    city: " Lucknow"
}
console.log(Person);
Person.city = "New York";
console.log(Person);
Person.country = "United States";
console.log(Person);