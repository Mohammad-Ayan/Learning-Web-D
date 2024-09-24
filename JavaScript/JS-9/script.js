//---------------Async Function-------------

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
