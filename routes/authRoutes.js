const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

require('../controllers/authController'); 

// register
router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', register);

// Login
router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.post('/login', login);


module.exports = router;