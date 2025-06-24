//-----------------Expoting in Files----------------

// const math = require("./math");   

// console.log(math);
// console.log(math.sum(2,3));
// console.log(math.PI);

//--------------requiring(Exporting) in Directories---------------

const info = require("./Fruits");    

console.log(info[0].name);

// require will search only index.js(perform all the in it) and fetch it 