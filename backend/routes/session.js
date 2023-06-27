const sessionController = require("../controllers/session.js");
const userController = require("../controllers/user.js");

const express = require('express');
const router = express.Router();

// route to authenticate user
router.get('/', async (req, res) => {
    try {
        const result = await sessionController.authenticateUser(req.body.email,req.body.password);
        if (result.error != undefined) {
            res.status(result.status).json(result.error)
        } else {
            res.status(200).json(result)
        }
    } catch (err) {
        res.status(500).json({message: err.toString()});
    }
})


// route to create new user
router.post('/', async (req, res) => {
    try {
        const result = await userController.createUser(req.body.first_name, req.body.last_name, req.body.email, req.body.password);

        // check result
        if (result.error != undefined) {
            res.status(result.status).json(result.error);
        } else {
            res.status(201).json(result);
        }
    } catch (err) {
        res.status(500).json({message: err.toString()});
    }
})

module.exports = router;