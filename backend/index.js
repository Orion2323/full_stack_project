const express = require('express');
const bodyParser = require('body-parser');

// import routes
const userRoutes = require('./routes/user.js');

// import middleware

// define express app instance
const app = express();
const port = 3000;

app.use(bodyParser.json());

// health route 
app.get('/health', (req, res, next) => {
    const responseBody = {
        status: 'up',
        port,
    };

    res.json(responseBody);
});

// define route handlers here
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});