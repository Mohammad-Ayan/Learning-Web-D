let jsonRes =
    `{"fact": "Approximately 1/3 of cat owner thinks that their pets are able to read their minds.","length":78}`;

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name: "ayan",
    marks: "85"
}

//------------------API request---------------

let url = "https://catfact.ninja/fact";

fetch(url) // promise
    .then((res) => {
        return res.json();  // parse 
    })
    .then((data1) => {
        console.log("data1: ", data1.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();  // parse 
    })
    .then((data2) => {
        console.log("data2: ", data2.fact);
    })
    .catch((err) => {
        console.log("ERROR", err);
    });

//------------------Fetch with Async-Await ---------------

let url1 = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url1);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url1);
        let data2 = await res.json();
        console.log(data2.fact);

    } catch (err) {
        console.log("error", err);
    }
}

