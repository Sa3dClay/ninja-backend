const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Get all workouts", data: req.body  });
});

router.post("/", (req, res) => {
    res.json({ message: "Add new workout", data: req.body });
});

router.get("/:id", (req, res) => {
    res.json({ message: "Get workout with id", data: req.body  });
});

router.delete("/:id", (req, res) => {
    res.json({ message: "Delete workout with id", data: req.body  });
});

router.patch("/:id", (req, res) => {
    res.json({ message: "Update workout with id", data: req.body });
});

module.exports = router;
