// async function getData() {
//     //Simulate getting data from a server.. 
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             resole(455)
//         }, 3400);
//     })
// }


//------ settle means resolve or reject 
//------ resolve means promise has settled successfully ✔️
//------ resolve means promise has not settled successfully ❌

async function getData() {
    //Simulate getting data from a server.. 
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
     let data = await x.json()   //parse
    console.log(data);
     
}
async function main() {
    console.log("Loading Modules");

    console.log('Do Something else');

    console.log('Load data');

    let data = await getData()

    console.log(data);

    console.log('process data');

    console.log('task 2');
}

 main()

//----------not better approach--------------------
// data.then((v) => {

//     console.log('data');

//     console.log('process data');

//     console.log('task 2');
// })
