const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); // using urlencoded middleware
app.use(express.json());   

app.get("/register", (req, res) => {
    res.send("Standard GET response");
});

app.post("/register", (req, res) => {
    res.send("Standard POST response");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});