import jwt from 'jsonwebtoken'
import User from '../models/User.js'
const SECRET = process.env.SECRET;

const checkToken = (req, res, next) => {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).redirect('/auth/login');
    }

    try {
        const verified = jwt.verify(token, SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).redirect('/auth/login');
    }
};

const isAdmin = async (req, res, next) => {
    const name = req.params.name
    try {
        const user = await User.findOne({ name });
        if(user.role === 'admin') return next();
        res.render('errors/notFound');
    } catch(err) {
        res.status(401).json({ msg: 'Usuário não encontrado: ', err });
    }
}

export { checkToken, isAdmin }