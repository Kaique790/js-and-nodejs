const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/Post');
const bodyParser = require('body-parser');
const { where } = require('sequelize');

// Config

// Template Engine 
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//Rotas
app.get('/', (req, res) => {
    Post.findAll({ order: [['id', 'ASC']] }).then((posts) => {
        res.render('home', { posts: posts })
    })
});

app.get('/cad', (req, res) => {
    res.render('formulario')
});

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        "Houve um erro na criação do do post " + erro
    });
});

app.get('/deletar/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/');
    }).catch((erro) => {
        console.error('Houve um erro ao deletar a postagem:', erro); 
        res.status(500).send('Erro ao deletar postagem');
    })
});

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081');
});
