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
    const id = req.params.id
    try {
        user = await User.findOne({ _id: id });
        if(user.role === 'admin') return next();
        res.render('errors/notFound');
    } catch(err) {
        res.status(401).json({ msg: 'Usuário não encontrador: ', err });
    }
}

export { checkToken, isAdmin }