import mongo from 'mongoose'
const Schema = mongo.Schema;
const model = mongo.model;

const Post = model('Post', {
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: ('Category'),
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: ('User'),
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    }
});

export default Post