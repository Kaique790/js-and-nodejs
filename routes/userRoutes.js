import express from 'express'
const router = express.Router();

import sendPost from '../controllers/postController.js'

// models
import Category from '../models/Category.js'
import Post from '../models/Post.js'

// User home
router.get('/', async (req, res) => {
    const userName = req.userName;
    try {
        const categories = await Category.find().lean();
        const posts = await Post.find().populate('category').lean();

        res.status(201).render('user/index.hbs', { userName, categories, posts });
    } catch(err) {
        res.status(500).json({ msg: 'Erro desconhecido no servidor!' });
    }
    
});

// CRUD posts
router.get('/post', async (req, res) => {
    const userName = req.userName;

    try {
        const categories = await Category.find().lean();
        res.status(200).render('user/addPost', { categories, userName});
    } catch(err) {
        res.status(500).json({ msg: 'Erro desconhecido no servidor!' });
    } 
});

router.post('/post', sendPost);

router.delete('/post', async (req, res) => {
    const postId = req.body.postId

    try {
        await Post.findOneAndDelete({ _id: postId });
        res.status(200).json({ msg: 'Postagem deletada com sucesso!' })
    } catch(err) {
        res.status(404).json({ msg: 'Postagem não encontrada.'});
    }
})

router.patch('/posts', async (req, res) => {
    const userName = req.userName
    const { postId, title, content, category } = req.body
    const newData = {
        title,
        content,
        category,
        owner: userName
    }

    try {
        await Post.findOneAndUpdate({ _id: postId }, newData);
    } catch(err) {
        res.status(404).json({ msg: 'Postagem não encontrada.' })
    }
});

export default router