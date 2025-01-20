const express = require('express');
router = express.Router();

const mongoose = require('mongoose');
require('../models/Categoria');
const Categoria = mongoose.model("categorias")

// admin main page
router.get('/', (req, res) => {
    res.render('admin/index')
});


// list Posts 
router.get('/posts', (req, res) => {
    res.send('Página de posts');
});

// list Categories 
router.get('/categorias', (req, res) => {
    res.render('admin/categorias');
});

// add categories
router.get('/categoria/add', (req, res) => {
    res.render('admin/addcategoria');
});

router.post('/categorias/nova', (req, res) => {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    };

    new Categoria(novaCategoria)
        .save()
        .then(() => {
            console.log('Categoria salva com sucesso!');
        })
        .catch((err)=> {
            console.log('Houve um erro ao salvar um nova categoria: '+ err);
        });
})


module.exports = router;