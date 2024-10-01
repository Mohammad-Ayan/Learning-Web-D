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

fetch(url)
    .then((res) => {
        console.log(res);
        res.json()  // make it readeable and returns promise
    })
    .catch((err) => {
        console.log("ERROR", err);
    });