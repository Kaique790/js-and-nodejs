// Carregando módulos
    const express = require('express');
    const app = express();
    
    const exphbs = require('express-handlebars');
    const session = require('express-session');
    const flash = require('connect-flash');

    const admin = require('./routes/admin.js');
    const usuarios = require('./routes/usuario.js')

    const path = require('path');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');

    require('./models/Postagem');
    const Postagens = mongoose.model('postagens')
    require('./models/Categoria')
    const Categoria = mongoose.model('categorias')

    passport = require('passport')
    require('./config/auth.js')(passport)

    // Public
    app.use(express.static(path.join(__dirname, 'public')));

// config session
app.use(session({
    secret: "123456",
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null
    next();
});

// config Handlebars
    app.engine('handlebars', exphbs.engine({ defaultLayout: 'main',
    runtimeOptions: { allowProtoPropertiesByDefault: true }
    }));
    app.set('view engine', 'handlebars');

// config body-parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

// config mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/blogapp')
        .then(() => {
            console.log('conectado ao mongo');
        }).catch((error) => {
            console.log('Houve um erro ao tentar estabelecer a conexão: '+error)
        })


// Rotas
    // Postagens
    app.get('/', (req, res) => {
        Postagens.find().populate('categoria').sort({ data:'desc' }).lean()
            .then((postagens) => {
                res.render('index', { postagens: postagens});
            }).catch((err) => {
                req.flash('error_msg', 'Houve um erro interno')
                res.redirect('/404')
            })
       
    });

    app.get('/postagens/:slug', (req, res) => {
        Postagens.findOne({ slug: req.params.slug}).lean()
            .then((postagem) => {
                if(postagem) {
                    res.render('post/index', { postagem: postagem });
                }else {
                    req.flash('error_msg', 'Essa postagem não existe');
                    res.redirect('/');
                }
            }).catch((err) => {
                req.flash('error_msg', 'Houve um erro interno');
                res.redirect('/');
            });
    });
    app.get('/categorias', (req, res) => {
        Categoria.find().lean()
            .then((categorias) => {
                res.render('categorias/index', { categorias: categorias});
            }).catch((err) => {
                    req.flash('error_msg', 'Erro ao carregar as categorias');
                    res.redirect('/')
            });
    });

    app.get('/categorias/:slug', (req, res) => {
        Categoria.findOne({ slug: req.params.slug})
            .then((categoria) => {
                if(categoria) {     
                    Postagens.find({ categoria: categoria._id}).lean()
                        .then((postagens) => {
                            res.render('categorias/postagens', { postagens: postagens, categoria: categoria })
                        }).catch((err) => {
                            req.flash('erro_msg', 'Houve um erro ao listar os post');
                            res.redirect('/categorias')
                        })
                }else {
                    req.flash('error_msg', 'Está categoria não existe');
                    res.redirect('/categorias');
                }
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro interno');
            res.redirect('/categorias');
        })
    })


    // Rota de erro
    app.get('/404', (req, res) => {
        res.send('Erro 404!')
    })
    
    // Rotas personalizadas
    app.use('/admin', admin);
    app.use('/usuarios', usuarios);


// Outros
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log('servidor rodando na porta: ', PORT);
});