const sessionController = require("../controllers/session.js");
const userController = require("../controllers/user.js");

const express = require('express');
const router = express.Router();

// route to authenticate user
router.get('/login', async (req, res) => {
    try {
        const result = await sessionController.authenticateUser(req.body.email,req.body.password);
        if (result.error != undefined) {
            return res.status(result.status).json(result.error)
        } else {
            return res.status(200).json(result)
        }
    } catch (err) {
        return res.status(500).json({error: err.toString()});
    }
})


// route to create new user
router.post('/register', async (req, res) => {
    try {
        const result = await userController.createUser(req.body.first_name, req.body.last_name, req.body.email, req.body.password);

        // check result
        if (result.error != undefined) {
            return res.status(result.status).json(result.error);
        } else {
            return res.status(201).json(result);
        }
    } catch (err) {
        return res.status(500).json({error: err.toString()});
    }
})

module.exports = router;