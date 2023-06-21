const express = require('express');
const bodyParser = require('body-parser');

// import routes
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

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});