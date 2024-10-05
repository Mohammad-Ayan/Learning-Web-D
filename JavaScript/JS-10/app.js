//-------------request using Axios-------------
//---Cat_API---
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;    // without parsing using Axios

    } catch (err) {
        console.log("error", err);
        return "No Fact Found";
    }
}

//---Dog_API---
let url1 = "https://dog.ceo/api/breeds/image/random"

let btn2 = document.querySelector("button");

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});


async function getImage() {
    try {
        let res = await axios.get(url1);
        return res.data.message;    // without parsing using Axios

    } catch (err) {
        console.log("error", err);
        return "No Image Found";
    }
}

//------------API request using Headers--------------

const url2 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let res = await axios.get(url2, config)
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}


