const mongo = require('mongoose');
const model = mongo.model;

const Categorie = model('Categories', {
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Categorie;