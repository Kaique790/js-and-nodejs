import express from 'express'
const router = express.Router();

// models
import Categorie from '../models/Categorie.js'
import User from '../models/User.js'
import Post from '../models/Post.js'

import addCategorie from '../controllers/categorieController.js'

router.get('/', async (req, res) => {
    try {
        const users = await User.find().lean();
        const categories = await Categorie.find().lean();
        const posts = await Post.find().populate('owner').lean();
        res.render('admin/index', { users, categories, posts });
    } catch (err) {
        res.status(401).json({ msg: 'Erro ao renderizar os usuários' });
    }
});

// CRUD categories
router.get('/categorie', async (req, res) => {
    const userName = req.userName

    res.render('admin/addCategorie.hbs', { userName });
});

router.post('/categorie', addCategorie);

router.delete('/categorie', async (req, res) => {
    const categorieId = req.body.categorieId
    try {
        await Categorie.findOneAndDelete({ _id: categorieId });
        await Post.deleteMany({ categorie: categorieId });
        res.status(201).json({ msg: 'Categoria deletada com sucesso!' });
    } catch (err) {
        res.status(400).json({ msg: 'Categoria não encontrada!' });
    }
});

router.patch('!');

export default router