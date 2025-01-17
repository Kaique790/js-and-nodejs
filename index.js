const port = 8080
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const { where } = require('sequelize');
const Post = require('./models/Post')

// config handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// config body parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.get('/', (req, res) => {
    Post.findAll()
        .then((posts) => {
            res.render('home', { posts: posts });
        })
});

// rout add post
app.post('/add', (req, res) => {
    Post.create({
        user: req.body.user,
        subject: req.body.subject,
        content: req.body.content
    }).then(() => {
        res.redirect('/')
    }).catch((error) => {
        'Houve um erro na criação do post: ' + error
    });
});

// rout delte post
app.get('/delete/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/');
    }).catch((error) => {
        console.log('Houve um erro ao deletar o post: ', error);
        res.status(500).send('Erro ao deletar postagem');
    });
});

// routes edit post
app.get('/edit/:id', (req, res) => {
    Post.findByPk(req.params.id)
        .then((post) => {
            if (post) {
                res.render('edit-post', { post: post })
            } else {
                res.status(400).send('Post não encontrado')
            }
        }).catch((error) => {
            console.log('erro ao carregar a página ', error);
            res.status(500)
        })
});

app.post('/edit/update/:id', (req, res) => {
    const postId = req.params.id
    const updatePost = {
        user: req.body.useredit,
        subject: req.body.subjectedit,
        content: req.body.contentedit
    }
    Post.update(updatePost, {
        where: { id: postId }
    }).then(() => {
        res.redirect('/')
    }).catch((error) => {
        'Houve um erro na atualização do post: ' + error
    });
});


app.listen(port, () => {
    console.log(`Executando servidor na porta: ${port}`);
});
