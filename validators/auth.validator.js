const validator = require("validator");

const validateSignUp = (email, password) => {
    if (!email) throw Error("Email field is required");

    if (!password) throw Error("Password field is required");

    if (!validator.isEmail(email)) throw Error("Email is not valid");

    if (!validator.isStrongPassword(password))
        throw Error("Password is not strong enough");
};

module.exports = { validateSignUp };
