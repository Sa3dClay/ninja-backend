require("dotenv").config();

const express = require("express");
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
app.use("/api/workouts", workoutRoutes);

// listen on port
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
});
