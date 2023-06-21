// Update with your config settings.

module.exports = {
    development: {
        client: 'mysql',
        debug: true,

        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'name_of_user',
            password: 'user_password',
            insecureAuth: true,
            database: 'name_of_database'
        }
    }
};