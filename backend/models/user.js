const knex = require('../database/knex');

const USER_TABLE = 'user';

// method for getting all users in database
const allUsers = async () => {
    const result = await knex(USER_TABLE);
    return result;
}

module.exports = {
    allUsers
};