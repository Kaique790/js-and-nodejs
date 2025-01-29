const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const connectDB = require('./config/db');
const jwt = require('jsonwebtoken');

const PORT = 3000;

require('./config/db');

const userRoutes = require('./routes/user')

// config JSON
app.use(express.json());

// config hablebars
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

// Public Route
app.get('/', (req, res) => {
    res.render('home');
});

// routes user
app.use('/user', userRoutes);


connectDB();
app.listen(PORT, console.log('Conectado na porta: ', PORT));