import User from '../models/User.js'

const getUserName = async (req, res, next) => {
    req.userName = req.params.name
    try {
        const user = await User.findOne({ name: req.userName });
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        req.userId = user._id
        next()
    } catch (err) {
        res.status(500).render('errors/notFound', { status: 500 })
    }
    
}

export default getUserName