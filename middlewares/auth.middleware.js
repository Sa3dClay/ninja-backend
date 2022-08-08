const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization)
        return res
            .status(401)
            .json({ error: "Authorization failed, token is required!" });

    // "Bearer token"
    const token = authorization.split(" ")[1];

    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findOne({ _id }).select("_id");

        next();
    } catch (error) {
        console.log("Authentication error", error);

        res.status(401).json({ error: "Not authorized" });
    }
};

module.exports = authMiddleware;
