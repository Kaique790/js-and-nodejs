import express from 'express'
const router = express.Router();

import sendPost from '../controllers/postController.js'
import Categorie from '../models/Categorie.js'

// models
import User from '../models/User.js'

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


export default router