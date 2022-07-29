const JWT = require("jsonwebtoken");

const createToken = (id) => {
    return JWT.sign({ _id: id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = { createToken };
