const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ADMIN_CODE = process.env.ADMIN_CODE
const SECRET = process.env.SECRET;

const checkToken = (req, res, next) => {

    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: 'Autorização não encontrada!' });

    try {
        const verified = jwt.verify(token, SECRET);
        req.user = verified;
        
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Autorização inválida!' });
    }

};

const isAdmin = async (req, res, next) => {
    const id = req.params.id
    try {
        user = await User.findOne({ _id: id });
        if(user.role === 'admin') return next()
    } catch(err) {
        res.status(401).json({ msg: 'Erro ao consultar: ', err });
    }

    res.status(401).json({ msg: 'Não autorizado!' });
}

module.exports = { checkToken, isAdmin };