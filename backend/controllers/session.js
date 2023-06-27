const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../models/user.js');

const authenticateUser = async (email, password) => {
    // check that email and password are not empty
    if (email == null || email == undefined || email.length == 0) {
        return {
            status: 400,
            error: "Email is required"
        }
    } else if (password == null || password == undefined || password.length == 0) {
        return {
            status: 400,
            error: "Password is required"
        }
    }

    // check if user doesnt exist
    const ifExist = await userModel.findUserByEmail(email);
    if (ifExist.length == 0) {
        return {
            status: 404,
            error: "User does not exist"
        }
    }

    // recreate hashed password
    const hashedPassword = await bcrypt.hash(password, ifExist[0].salt);

    // check if user password is correct
    const userValid = await userModel.authenticateUser(email, hashedPassword);
    if (userValid.length == 0) {
        return {
            status: 401,
            error: "Invalid email or password"
        }
    }

    const token = await createAuthToken(email,"User");
    return token;
}

const createAuthToken = async(email, role) => {
    const accessTokenSecret = "secret";

    // check if user does not exist
    const ifExists = await userModel.findUserByEmail(email);
    if (ifExists.length == 0) {
        return {
            status: 404,
            error: "User does not exist"
        }
    }

    // check role of user
    if (role != "User") {
        return {
            status: 401,
            error: "Unauthorized role"
        }
    }

    const token = jwt.sign({...ifExists[0], claims:["User"]}, accessTokenSecret);
    return token;
}

module.exports = {
    authenticateUser
}