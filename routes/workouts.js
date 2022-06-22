const express = require("express");
const workoutModel = require("../models/workout.model");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Get all workouts", data: req.body });
});

router.post("/", async (req, res) => {
    const { title, reps, load } = req.body;

    try {
        const workout = await workoutModel.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

router.get("/:id", (req, res) => {
    res.json({ message: "Get workout with id", data: req.body });
});

router.delete("/:id", (req, res) => {
    res.json({ message: "Delete workout with id", data: req.body });
});

router.patch("/:id", (req, res) => {
    res.json({ message: "Update workout with id", data: req.body });
});

module.exports = router;
