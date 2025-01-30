const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const checkToken = (req, res, next) => {

    const tokenHeader = req.body['authentication'];
    const token = tokenHeader && tokenHeader.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'Não autorizado' });

    try {
        jwt.verify(token, SECRET);
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Não autorizado' });
    }

};

module.exports = checkToken;