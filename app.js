const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const connectDB = require('./config/db');
const jwt = require('jsonwebtoken');

// Import checkToken
const checkToken = require('./middlewares/authMiddleware');

const PORT = 3000;

require('./config/db');

// Import routes
const userRoutes = require('./routes/userRoutes')

// config JSON
app.use(express.urlencoded({ extended: true }))
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

// Private Route
app.get('/user/:id', checkToken, (req, res) => {
    res.render('home');
});


// routes user
app.use('/user', userRoutes);


connectDB();
app.listen(PORT, console.log('Conectado na porta: ', PORT));