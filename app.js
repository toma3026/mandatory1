
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

app.get("/tech", (req, res) => {
    res.sendFile(__dirname + "/public/tech.html");
});

app.get("/javascript", (req, res) => {
    res.sendFile(__dirname + "/public/javascript.html");
});

app.listen(8080);
