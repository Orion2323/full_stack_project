const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.js');
const { authenticateWithClaims } = require('../middleware/auth.js');

router.get('/all', authenticateWithClaims("User"), async (req, res, next) => {
    try {
        const result = await UserController.getUsers();
        return res.status(200).json(result);

    } catch (err) {
        return res.status(500).json({error: err.toString()});
    }   
}); 

module.exports = router;