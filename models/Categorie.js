import mongo from 'mongoose'
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

export default Categorie