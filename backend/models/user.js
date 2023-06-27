const knex = require('../database/knex');

const USER_TABLE = 'user';

// method for getting all users in database
const allUsers = async () => {
    const result = await knex(USER_TABLE);
    return result;
}

const createUser = async (first_name, last_name, email, password, salt) => {
    const result = await knex(USER_TABLE).insert({first_name, last_name, email, password, salt});
    return {
        first_name: first_name,
        last_name: last_name,
        email: email
    }
}

const findUserByEmail = async (email) => {
    const result = await knex(USER_TABLE).where({email});
    return result;
}

const authenticateUser = async (email, password) => {
    const result =  await knex(USER_TABLE).where({email, password});
    return result;
}

module.exports = {
    allUsers,
    createUser,
    findUserByEmail,
    authenticateUser
};