import express from 'express'
const router = express.Router();

import Categorie from '../models/Categorie.js'
import User from '../models/User.js'

import addCategorie from '../controllers/categorieController.js'

router.get('/', async (req, res) => {    
    try {
        const users = await User.find().lean();
        const categories = await Categorie.find().lean();
        res.render('admin/index', { users, categories });
    } catch(err) {
        res.status(401).json({ msg: 'Erro ao renderizar os usuários' });
    }
});

// Add categories
router.get('/categorie/add', async (req, res) => {  
    const name = req.params.name

    res.render('admin/addCategorie.hbs', { name });
});

router.post('/categorie/add', addCategorie);

export default router