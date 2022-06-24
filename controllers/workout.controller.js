const mongoose = require("mongoose");
const workoutModel = require("../models/workout.model");

// get all workouts
const getWorkouts = async (req, res) => {
    // get all workouts and sort desc
    const workouts = await workoutModel.find({}).sort({ createdAt: -1 });

    // return workouts
    res.status(200).json(workouts);
};

// get single workout
const getWorkout = async (req, res) => {
    // get id from req url
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ error: "No such workout" });

    // find workout with id
    const workout = await workoutModel.findById(id);

    // return not found if no workout
    if (!workout) return res.status(404).json({ error: "No such workout" });

    // return workout
    res.status(200).json(workout);
};

// create workout
const createWorkout = async (req, res) => {
    // get req body
    const { title, reps, load } = req.body;

    // try to add new workout
    try {
        const workout = await workoutModel.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

// update workout
const updateWorkout = async (req, res) => {
    // get id from req url
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ error: "No such workout" });

    // find and delete workout with id
    const workout = await workoutModel.findOneAndUpdate(
        { _id: id },
        { ...req.body }
    );

    // return not found if no workout
    if (!workout) return res.status(404).json({ error: "No such workout" });

    // get updated workout
    const updatedWorkout = await workoutModel.findById(id);

    // return deleted workout
    res.status(200).json(updatedWorkout);
};

// delete workout
const deleteWorkout = async (req, res) => {
    // get id from req url
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ error: "No such workout" });

    // find and delete workout with id
    const workout = await workoutModel.findOneAndDelete({ _id: id });

    // return not found if no workout
    if (!workout) return res.status(404).json({ error: "No such workout" });

    // get all workouts after delete
    const workouts = await workoutModel.find({}).sort({ createdAt: -1 });

    // return deleted workout
    res.status(200).json(workouts);
};

module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout,
    updateWorkout,
    deleteWorkout,
};
