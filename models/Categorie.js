import mongo from 'mongoose'
const model = mongo.model;

const Categorie = model('Categorie', {
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

export default Categorie