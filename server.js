require("dotenv").config();
const express = require("express");

// create express app
const app = express();

// middlewares
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

// add routes
app.get("/", (req, res) => {
    res.json({ message: "welcome" });
});
app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});
app.get("*", (req, res) => {
    res.json({ message: "404 Not Found" });
});

// listen on port
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
});
