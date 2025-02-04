const getUserName = (req, res, next) => {
    req.userName = req.params.name
    next()
}

export default getUserName