const express = require('express');
const bodyParser = require('body-parser');

// import routes
const userRoutes = require('./routes/user.js');
const sessionRoutes = require('./routes/session.js');

// import middleware
const {createModelMiddleware} = require("./middleware/model-middleware.js");
const {authenticateJWT} = require("./middleware/auth.js");

// define express app instance
const app = express();
const port = 8000;

app.use(createModelMiddleware);
app.use(bodyParser.json());

// health route 
app.get('/health', (req, res, next) => {
    const responseBody = {
        status: 'up',
        port,
    };

    res.json(responseBody);
    next();
});

// define route handlers here
app.use('/user', userRoutes);
app.use('/session', sessionRoutes, authenticateJWT);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});