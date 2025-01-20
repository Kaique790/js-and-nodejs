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
    Categoria.find().lean().sort({ date: 'desc' })
        .then((categorias) => {
            res.render('admin/categorias', { categorias: categorias });
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao tentar listar as categorias');
            res.redirect('/admim');
        });
    
});

// add categories
router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategoria');
});

router.post('/categorias/nova', (req, res) => {

    var erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({ texto: "nome inválido" });
    }
    if (!req.body.slug || typeof req.body.slug == undefined || req.body.nome == null) {
        erros.push({ texto: "Slug inválido" });
    }
    if (req.body.nome < 2) {
        erros.push({ texto: "Nome da categoria é muito pequeno"})
    }
    if(erros.length > 0) {
        res.render('admin/addcategoria', { erros: erros})
    } else {
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        };
    
        new Categoria(novaCategoria)
            .save()
            .then(() => {
                req.flash("success_msg", "Categoria criada com sucesso")
                res.redirect('/admin/categorias')
            })
            .catch((err)=> {
                req.flash("error_msg", "Houvea ao tentar salvar a categoria");
                res.redirect('/admin');
            });
    };
});

// edit categories
router.get('/categorias/edit/:id', (req, res) => {
    Categoria.findOne({ _id: req.params.id }).lean()
        .then((categoria) => {
            res.render('admin/editcategoria', { categoria: categoria });
        }).catch((err) => {
            req.flash("error_msg", "Está categoria não existe")
            res.redirect('/admin/categorias')
        })
    
});


router.post('/categorias/edit', (req, res) => {

    
    Categoria.findOneAndUpdate({ _id: req.body.id }, { 
            nome: req.body.nome,
            slug: req.body.slug 
        },
        { new: true } 
    )
    .then((categoria) => {
        
        req.flash('success_msg', 'Categoria editada com sucesso');
        res.redirect('/admin/categorias');
    }).catch((err) => {
        req.flash('error_msg', 'Houve um erro ao tentar salvar a edição da categoria');
        res.redirect('/admin/categorias');
    });
});

// delete categoria 
router.post('/categoria/deletar', (req, res) => {
    Categoria.deleteOne({ _id: req.body.id })
        .then(() => {
            req.flash('success_msg', 'Deletado com sucesso');
            res.redirect('/admin/categorias')
        }).catch((err) => {
            req.flash('error_msg', 'Houve ao tentar deletar a categoria');
            res.redirect('/admin/categorias')
        })
})

// Postagens


// add postagem
router.get('/postagens', (req, res) => {
    res.render('Admin/postagens')
})

router.get('/postagens/add', (req, res) => {
    Categoria.find().lean()
        .then((categorias) => {
            res.render('admin/addpostagem', {categorias: categorias})
        }).catch((err)=> {
            req.flash('error_msg', 'Não foi possivel carregar o formulário');
            res.redirect('/admin')
        })
    
})

module.exports = router;