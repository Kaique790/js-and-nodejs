const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = 3000;
const jwt = require('jsonwebtoken');
require('./config/db');

const userRoutes = require('./routes/user')

// config JSON
app.use(express.json());

// Public Route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Public Page' });
});

// routes user
app.use('/user', userRoutes);


connectDB();
app.listen(PORT, console.log('Conectado na porta: ', PORT));