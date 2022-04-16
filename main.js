const express = require('express');
const app = express();
const path = require("path");
const PORT_NUMBER = 2011;

const screenshot = require("screenshot-desktop");

app.post("/drivein", (req, res) => {
    screenshot().then((img) => {
        console.log(img);
        res.send(img);
    })
});

app.listen(PORT_NUMBER, () => {
    console.log("Riot Drive in! :: ", PORT_NUMBER);
})