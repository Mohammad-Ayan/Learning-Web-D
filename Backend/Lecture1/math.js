//-----------Export in Files(using module and require)----------

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

module.exports = {   // A special object
    sum: sum,
    mul: mul,
    g: g,
    PI: PI,
};

//--OR--

module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.g = 9.8;
module.exports.PI = 3.14;

//we can only write expots also when there is obj with fun and properties

//-----------Export in Directories(using module and require)----------

