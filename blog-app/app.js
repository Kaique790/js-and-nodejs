// Carregando módulos
    const express = require('express');
    const app = express();
    const admin = require('./routes/admin.js');
    const exphbs = require('express-handlebars');

    const path = require('path');
    const bodyParser = require('body-parser');
    // const mongoose = require('mongoose');

    // Public
    app.use(express.static(path.join(__dirname, 'public')));

// config Handlebars
    app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

// config body-parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


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