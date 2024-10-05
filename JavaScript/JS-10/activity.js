//---------------query_String-----------------

// let url3 = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let colArr = await getColleges(country);
//     console.log(colArr);
//     show(colArr);
// });

// function show(colArr) {
//     let list = document.querySelector("#list")
//     list.innerText = "";
//     for (let col of colArr) {
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country) {
//     try {
//         let res = await axios.get(url3 + country);
//         return res.data;
//     } catch (e) {
//         console.log("error :", e);
//         return [];
//     }
// }

//----fetching using state name----

// let url2 = "http://universities.hipolabs.com/search?country=India&state_province=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let state = document.querySelector("input").value;
//     // console.log(state-province);

//     let colArr = await getColleges(state);
//     console.log(colArr);
//     show(colArr);
// });

// function show(colArr) {
//     let list = document.querySelector("#list")
//     list.innerText = "";
//     for (let col of colArr) {
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(state) {
//     try {
//         let res = await axios.get(url2 + state);
//         let universities = res.data;
//         universities = universities.filter(university =>
//             university.state_province.toLowerCase() === state.toLowerCase()
//         );

//         return universities;

//     } catch (e) {
//         console.log("error :", e);
//         return [];
//     }
// }


let url2 = "http://universities.hipolabs.com/search?country=India&state_province=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;

    let colArr = await getColleges(state);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = ""; // Clear previous list
    for (let col of colArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(state) {
    try {
        let res = await axios.get(url2 + state);  // Fetch data using the input state
        let universities = res.data;

        // Filter universities that have a matching state_province (case insensitive)
        universities = universities.filter(university =>
            university.state_province && university.state_province.toLowerCase() === state.toLowerCase()
        );

        return universities;

    } catch (e) {
        console.log("error:", e);
        return [];
    }
}
