const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const exphbs = require('express-handlebars');
const path = require('path')

const connectDB = require('./config/db');
const jwt = require('jsonwebtoken');

const User = require('./models/User');

// Import checkToken
const { checkToken, isAdmin } = require('./middlewares/authMiddleware');

const PORT = 3000;

// Statics
app.use(express.static(path.join(__dirname, 'public')));

// Cookies
app.use(cookieParser());

// config JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Import routes
const userRoutes = require('./routes/authRoutes');

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
app.get('/user/home/:id', checkToken, async (req, res) => {
    const id = req.params.id;

    // check if user exists
    res.render('user/index.hbs')
});

// Admin route
app.get('/admin/:id', checkToken, isAdmin, async (req, res) => {
     
    try {
        const users = await User.find().lean();
        res.render('admin/index', { users });
    } catch(err) {
        res.status(401).json({ msg: 'Erro aorenderizar os usuários' })
    }
    

    
});

// routes user
app.use('/user', userRoutes);


connectDB();
app.listen(PORT, console.log('Conectado na porta: ', PORT));