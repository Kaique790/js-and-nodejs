import User from '../models/User.js'

const getUserName = async (req, res, next) => {
    req.userName = req.params.name
    try {
        const user = await User.findOne({ name: req.userName });
        req.userId = user._id
    } catch (err) {
        console.log(err)
    }
    next()
}

export default getUserName