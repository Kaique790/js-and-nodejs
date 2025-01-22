module.exports = {
    isAdmin : function(req, res, next) {

        if(req.isAuthenticated() && req.user.ehAdmin === 1) {
            return next();
        } else {
            req.flash('error_msg', 'Você não é administrador');
            res.redirect('/')
        }
    }
}