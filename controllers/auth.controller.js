const mongoose = require("mongoose");
const userModel = require("../models/user.model");

// login
const login = async (req, res) => {
    res.json({ msg: "login user" });
};

// signup
const signup = async (req, res) => {
    res.json({ msg: "signup user" });
};

module.exports = { login, signup };
