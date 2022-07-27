require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const workoutRoutes = require("./routes/workouts");

// create express app
const app = express();

// middlewares
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

// add routes
app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);

// connect db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen on port
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
