const bcrypt = require('bcrypt');

const userModel = require('../models/user');

const getUsers = async () => {
    const result = await userModel.allUsers();
    return result;
}

const createUser = async (first_name, last_name, email, password) => {
    // check if first_name, last_name, email, and password is valid
    if (first_name == null || first_name == undefined || first_name.length == 0) {
        return {
            status: 400,
            error: "First name is required"
        }
    } else if (last_name == null || last_name == undefined || last_name.length == 0) {
        return {
            status: 400,
            error: "Last name is required"
        }
    } else if (email == null || email == undefined || email.length == 0) {
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

    // check if user with email already exists
    const ifExists = await userModel.findUserByEmail(email);
    if (ifExists.length > 0) {
        return {
            status: 409,
            error: "User with this email already exists"
        }
    }

    // create salt and password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const result = await userModel.createUser(first_name, last_name, email, hashedPassword, salt);
    result.password = password;

    return result;
}

module.exports = {
    getUsers,
    createUser
};