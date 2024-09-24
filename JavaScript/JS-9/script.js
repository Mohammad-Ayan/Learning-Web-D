// ---------------Async Function-------------

async function greet() {
    // throw "404 page not found";
    return "hello!";
}

greet()
.then(()=>{
    console.log("promise was resolved");

})
.catch((err)=>{
console.log("promise was rejected with err", err);
})

let demo = async () => {
    return 5;
}

// ---------------Await Keyword-------------

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000)
    });
}

async function demo() {
    await getNum();  // works after 1 sec
    await getNum();  // works after 1 sec
    getNum()
}


h2 = document.querySelector("h2");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected")
            }

            h2.style.color = color;
            console.log(`color changed to ${color}`);

            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("blue", 1000);
        await changeColor("green", 1000);
        await changeColor("orange", 1000);

    } catch (err) {
        console.log("error caught " + err);
    }

    let a = 5;
    console.log(a);
    console.log("new number: " + (a + 4));
}

demo();
