import mongo from 'mongoose'
const model = mongo.model;

const Category = model('Category', {
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

export default Category