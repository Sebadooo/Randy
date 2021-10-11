const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, () => {
    console.log("activando mi primer servidor")
});

app.get("/", (req, res) => {
    res.send("Main está activo")
})

app.get("/babbage", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./babbage.html"))
});

app.get("/berners.lee", (req, res) => {
    res.send("Berners.lee esta OK")
});

app.get("/clarke", (req, res) => {
    res.send("Clarke esta OK")
});

app.get("/hamilton", (req, res) => {
    res.send("Hamilton esta OK")
});

app.get("/hopper", (req, res) => {
    res.send("hopper esta OK")
});

app.get("/lovelance", (req, res) => {
    res.send("lovelance esta OK")
});

app.get("/turing", (req, res) => {
    res.send("turing esta OK")
});