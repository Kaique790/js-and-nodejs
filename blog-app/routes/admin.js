const flash = require('connect-flash/lib/flash');
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

require('../models/Categoria');
const Categoria = mongoose.model("categorias");

require('../models/Postagem');
const Postagem = mongoose.model('postagens');

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

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({ texto: "nome inválido" });
    }
    if (!req.body.slug || typeof req.body.slug == undefined || req.body.nome == null) {
        erros.push({ texto: "Slug inválido" });
    }
    if (req.body.nome < 2) {
        erros.push({ texto: "Nome da categoria é muito pequeno" })
    }
    if (erros.length > 0) {
        res.render('admin/addcategoria', { erros: erros })
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
            }).catch((err) => {
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
    { new: true })
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
});


// Postagens

// add postagem
router.get('/postagens', (req, res) => {
    Postagem.find().populate('categoria').sort({ data: 'desc' }).lean()
        .then((postagens) => {
            res.render('Admin/postagens', { postagens: postagens });
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao tentar salvar a postagem');
            res.redirect('/admin')
        });

});

router.get('/postagens/add', (req, res) => {
    Categoria.find().lean()
        .then((categorias) => {
            res.render('admin/addpostagem', { categorias: categorias });
        }).catch((err) => {
            req.flash('error_msg', 'Não foi possivel carregar o formulário');
            res.redirect('/admin');
        });

});

router.post('/postagem/nova', (req, res) => {
    var erros = [];

    if (req.body.categoria == '0') {
        erros.push({ texto: 'Selecione umacategoria' });
    }

    if (erros.length > 0) {
        res.render('admin/addpostagens', { erros: erros });
    } else {
        const novoPost = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            conteudo: req.body.conteudo,
            categoria: req.body.categoria,
            slug: req.body.slug,
        };

        new Postagem(novoPost)
            .save()
            .then(() => {
                req.flash("success_msg", "Postagem criada com sucesso");
                res.redirect('/admin/postagens');
            }).catch((err) => {
                req.flash('error_msg', 'Houve um erro ao tentar salvar a postagem');
                res.redirect('/admin/postagens');
            })
    }

});

// edit postagem
router.get('/postagens/edit/:id', (req, res) => {
    Postagem.findOne({ _id: req.params.id }).lean()
        .then(postagem => {
            Categoria.find().lean()
                .then((categorias) => {
                    res.render('admin/editpostagem', {
                        postagem: postagem,
                        categorias: categorias
                    });
                }).catch((err)=> {
                    req.flash('erro_msg', 'Houve um erro ao tentar carregar as categorias');
                    res.redirect('/admin/postagens')
                })
        }).catch((err) => {
            req.flash('error_msg', 'Essa postagem não existe');
            res.redirect('/admin/postagens')
        })
});

router.post('/postagem/edit', (req, res) => {
    Postagem.findOneAndUpdate({ _id: req.body.id }, {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        conteudo: req.body.conteudo,
        categoria: req.body.categoria,
        slug: req.body.slug,
    },
    { new: true }).then(() => {
        req.flash('success_msg', 'Postagem editada com sucesso');
        res.redirect('/admin/postagens')
    }).catch((err) => {
        req.flash('error_msg', 'A postagem não pôde ser editada');
        res.redirect('/admin/postagens');
    })
})

// delete postagem

router.get('/postagens/deletar/:id', (req, res) => {
    Postagem.deleteOne({
        _id: req.params.id
    }).then(() => {
        req.flash('success_msg', 'Postagem deletada com sucesso');
        res.redirect('/admin/postagens');
    }).catch((err) => {
        req.flash('error_msg', 'A postagem não pôde ser deletada');
        res.redirect('/admin/postagens');
    })
})

module.exports = router;