const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const {
    validateSignUp,
    validateLogin,
} = require("../validators/auth.validator");

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.statics.signup = async function (email, password) {
    validateSignUp(email, password);

    const exists = await this.findOne({ email });
    if (exists) throw Error("Email already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hashedPassword });

    return user;
};

userSchema.statics.login = async function (email, password) {
    validateLogin(email, password);

    const user = await this.findOne({ email });
    if (!user) throw Error("No user exists with this email!");

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) throw Error("Incorrect password!");

    return user;
};

module.exports = mongoose.model("User", userSchema);
