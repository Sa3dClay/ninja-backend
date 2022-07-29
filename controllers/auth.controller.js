const userModel = require("../models/user.model");

// login
const login = async (req, res) => {
    res.json({ msg: "login user" });
};

// signup
const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.signup(email, password);

        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { login, signup };
