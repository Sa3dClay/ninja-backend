const validator = require("validator");

const checkRequiredField = (field, fieldName) => {
    if (!field) throw Error(fieldName + " is required");
};

const validateSignUp = (email, password) => {
    checkRequiredField(email, "Email");
    checkRequiredField(password, "Password");

    if (!validator.isEmail(email)) throw Error("Email is not valid");

    if (!validator.isStrongPassword(password)) throw Error("Password is not strong enough");
};

const validateLogin = (email, password) => {
    checkRequiredField(email, "Email");
    checkRequiredField(password, "Password");
};

module.exports = { validateSignUp, validateLogin };
