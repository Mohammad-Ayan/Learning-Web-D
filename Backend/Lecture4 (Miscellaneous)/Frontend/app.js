// ---Use of a factory function to create objects--- 
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}

let p1 = PersonMaker("John", 30); //copy
let p2 = PersonMaker("Jane", 25); //copy

// ---New Operator - creates an instance of an object that has a constructor function---
// Constructors - dosen't return anything
// - best and effective
function Person(name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
}

let p3 = new Person("John", 30);
let p4 = new Person("Jane", 25);

// prototype - allows to add methods to the object and share them across all instances of the object
// this - refers to the current instance of the object which is p3 & p4
// p3.talk() = p4.talk -> is equal and using same function, because of prototype


// ---Class (blueprint of object in class) - a tempelate for creating class---

class person {
    constructor(name, age) { 
        this.name = name;
        this.age = age;

    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p5 = new person("John", 30);
let p6 = new person("Jane", 25);

// constructor is a special method for creating and initializing an object created with a class
        
//----Inheritance - allows to create a new class that is based on an existing class----

class Employee extends person {
    constructor(name, age, jobTitle) {
        super(name, age); // call the constructor of the parent class
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(`I am working as a ${this.jobTitle}`);
    }
}