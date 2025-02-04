import express from 'express'
const app = express();
import cookieParser from 'cookie-parser'

import exphbs from 'express-handlebars'

import { fileURLToPath } from 'url';
import path from 'path'

import connectDB from './config/db.js'

import User from './models/User.js'

// __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import middlewares
import { checkToken, isAdmin } from './middlewares/authMiddleware.js'
import getUserName from './middlewares/getUserNameMiddleware.js'

const PORT = 3000;

// Statics
app.use(express.static(path.join(__dirname, 'public')));

// Cookies
app.use(cookieParser());

// config JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Import routes 
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

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


// routes
app.use('/auth', authRoutes);
app.use('/user/:name', checkToken, getUserName, userRoutes);
app.use('/admin/:name', checkToken, getUserName, isAdmin, adminRoutes);


connectDB();
app.listen(PORT, console.log('Conectado na porta: ', PORT));