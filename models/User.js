const mongo = require('mongoose');

const User = mongo.model('User', {
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = User;
