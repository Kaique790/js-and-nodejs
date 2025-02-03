const mongo = require('mongoose');
const Schema = mongo.Schema;
const model = mongo.model;

const Post = model('Posts', {
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    categorie: {
        type: Schema.Types.ObjectId,
        ref: ('Categories'),
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: ('Users'),
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    }
});

module.exports = Post;