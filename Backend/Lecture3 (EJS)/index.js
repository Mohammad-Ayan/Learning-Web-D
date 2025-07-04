const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/dice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1
    res.render("dice.ejs", { diceVal });
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
      res.render("instagram.ejs", { data });  
    }
    else{
        res.render("error.ejs")
    }
    

});

app.listen(port, () => {
    console.log(`listning on port ${port}`);
})