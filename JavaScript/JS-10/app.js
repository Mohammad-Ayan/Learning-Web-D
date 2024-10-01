//-------------request using Axios-------------

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
 