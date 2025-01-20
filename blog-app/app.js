// Carregando módulos
    const express = require('express');
    const app = express();
    const admin = require('./routes/admin.js');
    const exphbs = require('express-handlebars');
    const session = require('express-session');
    const flash = require('connect-flash');

    const path = require('path');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');

    // Public
    app.use(express.static(path.join(__dirname, 'public')));

// config session
app.use(session({
    secret: "123456",
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Middleware
app.use((req, res, next) => {
    res.locals.succes_msg = req.flash("succes_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

// config Handlebars
    app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
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
    app.get('/', (req, res) => {
        res.send('Página principal');
    });
    
    app.get('/posts', (req, res) => {
        res.send('Lista de posts');
    });

    app.use('/admin', admin);

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log('servidor rodando na porta: ', PORT)
})