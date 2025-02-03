const router = require('express').Router();

const sendPost = require('../controllers/postController');
const Categorie = require('../models/Categorie')

// models
const User = require('../models/User');

// User home
router.get('/home', async (req, res) => {
    res.render('user/index.hbs');
});

// Send post
router.get('/post', async (req, res) => {
    const categories = await Categorie.find().lean();
    res.render('user/post', { categories });
});

router.post('/post', sendPost);


module.exports = router;