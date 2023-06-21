const bcrypt = require('bcrypt');

const userModel = require('../models/user');

const getUsers = async () => {
    const result = await userModel.allUsers();
    return result;
}


module.exports = {
    getUsers
};