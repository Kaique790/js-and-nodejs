const jwt = require('jsonwebtoken');
const ADMIN_CODE = process.env.ADMIN_CODE
const SECRET = process.env.SECRET;

const checkToken = (req, res, next) => {

    const tokenHeader = req.headers['authorization'];
    const token = tokenHeader && tokenHeader.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'Não autorizado111' });

    try {
        const verified = jwt.verify(token, SECRET);
        req.user = verified;
        
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Não autorizado222!' });
    }

};

const isAdmin = async (req, res, next) => {
    const { role, adminCodeProvided } = req.body;
    if (role === 'admin' && adminCodeProvided === ADMIN_CODE) return next();
    res.status(401).json({ msg: 'Não autorizado!' })
}

module.exports = { checkToken, isAdmin };