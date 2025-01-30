const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const connectDB = require('./config/db');
const jwt = require('jsonwebtoken');

const User = require('./models/User');

// Import checkToken
const { checkToken, isAdmin } = require('./middlewares/authMiddleware');

const PORT = 3000;

require('./config/db');

// Import routes
const userRoutes = require('./routes/authRoutes')

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
app.get('/user/:id', checkToken, async (req, res) => {
    const id = req.params.id;

    // check if user exists
    try {
        const user = await User.findById(id, '-password');

        if (!user) return res.status(404).json({ msg: 'Usuário não encontrado' });
        res.status(200).json({ msg: 'oi' });
        
    } catch (error) {
        res.status(500).json({ msg: 'Houve um erro inesperado' });
    }

});

// Admin route
app.get('/admin', checkToken, isAdmin, async (req, res) => {
     
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