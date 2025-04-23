import express from 'express'
import { register, login } from '../controllers/authController.js'

const router = express.Router();

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


export default router