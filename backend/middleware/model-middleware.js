const User = require("../models/user.js");

const createModelMiddleware = async (req,res,next) => {
    req.models = {
        user: User
    }

    next();
}

module.exports = {
    createModelMiddleware
}