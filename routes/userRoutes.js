const router = require('express').Router();

//middlewares
const { checkToken } = require('../middlewares/authMiddleware');

// models
const User = require('../models/User');

// User home
router.get('/home/:id', checkToken, async (req, res) => {
    const id = req.params.id;

    // check if user exists
    res.render('user/index.hbs');
});

module.exports = router;