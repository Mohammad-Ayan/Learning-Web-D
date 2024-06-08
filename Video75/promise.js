console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log('Yes Done with 1');
            resolve("Ayan")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log('Yes Done with 2');
            resolve("Ayan2")
        }, 2000);
    }
})

let prom3 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 3")
    }
    else {
        setTimeout(() => {
            console.log('Yes Done with 3');
            resolve("Ayan3")
        }, 1000);
    }
})

let p4 = Promise.all([prom1, prom2, prom3])
p4.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err);

})