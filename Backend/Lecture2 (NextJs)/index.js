const express = require("express");
const app = express()

let port = 3000;

app.listen(port, () => {
    console.log(`app listen on port ${port}`);
})

// app.use((req, res) => {   // listen all the req
//     console.log("request recieved");
//     let code = "<h1>Fruits</h1> <ul><li><apple><li><li><orange><li></ul>"
//     res.send(code);
// })

app.get("/", (req, res) => {
    res.send("Hi, I'm root");  
})

app.get("/search", (req, res) => {
    res.send("You contacted search path");
})

app.get("/help", (req, res) => {
    res.send("You contacted help path");
})
// app.get("*", (req, res) => {
//     res.send("This path does not exist"); // catch all the req that does not match any path
// })

app.post("/", (req, res) => {
    res.send("You made a post request to root path");
});

//---path parameters---
app.get("/:username/: id", (req, res) => {
    let { username, id } = req.params;
    console.log(`Welcome to the page of @${username}`);
    res.send("ok");
});

// ---query---
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send(`<h1>Oopss, Noting Searched</h1>`)
    }
    res.send(`<h1>Search result for query: ${q}</h1>`)
});