const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Models
require('../models/Usuario');
const Usuario = mongoose.model('usuarios');

module.exports = function(passport) {
    passport.use(new localStrategy({ usernameField: 'email', passwordField: 'senha' }, (email, senha, done) => {
        Usuario.findOne({ email }).lean()
            .then(usuario => {
                if (!usuario) {
                    return done(null, false, { message: 'Esta conta não existe' });
                }

                return bcrypt.compare(senha, usuario.senha)
                    .then(batem => {
                        if (batem) {
                            return done(null, usuario);
                        } else {
                            return done(null, false, { message: 'Senha incorreta' });
                        }
                    });
            })
            .catch(err => done(err));
    }));

    passport.serializeUser((usuario, done) => {
        done(null, usuario._id);
    });

    passport.deserializeUser((id, done) => {
        console.log('Deserializing user with id:', id);
        Usuario.findById(id).lean()
            .then((usuario) => {
                done(null, usuario);
            })
            .catch((err) => done(err));
    });
};