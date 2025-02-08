import express from 'express'
const router = express.Router();

// models
import Category from '../models/Category.js'
import User from '../models/User.js'
import Post from '../models/Post.js'

import addCategory from '../controllers/categoryController.js'

router.get('/', async (req, res) => {
    const userName = req.userName
    try {
        const users = await User.find().lean();
        const categories = await Category.find().lean();
        const posts = await Post.find().populate('owner').lean();

        res.render('admin/index', { users, categories, posts, userName });
    } catch (err) {
        res.status(401).json({ msg: 'Erro ao renderizar os usuários' });
    }
});

// CRUD categories
router.get('/category', async (req, res) => {
    const userName = req.userName;

    res.render('admin/addCategory.hbs', { userName });
});

router.post('/category', addCategory);

router.delete('/category', async (req, res) => {
    const categorieId = req.body.categorieId;
    try {
        await Category.findOneAndDelete({ _id: categorieId });
        await Post.deleteMany({ categorie: categorieId });
        res.status(201).json({ msg: 'Categoria deletada com sucesso!' });
    } catch (err) {
        res.status(400).json({ msg: 'Categoria não encontrada!' });
    }
});

router.patch('/category', async (req, res) => {
    const name = req.body.name;
    const id = req.body.categoryId;

    if (!name || !id) return res.status(400).json({ msg: 'Categoria inválida' });

    try {
        const categoryExist = await Category.findOne({ name });

        if(categoryExist) return res.status(400).json({ msg: 'Categoria já cadastrada' });

        const response = await Category.findByIdAndUpdate(id, { name }, { new: true });

        res.status(200).json({ msg: 'Categoria editada com sucesso', newName: response.name });
    } catch (err) {
        res.status(400).json({ msg: 'Categoria não encontrada' });
    }

});

export default router