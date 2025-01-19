const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/introducao", {
    useNewUrlparser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Conectado com MongoDB');
    }).catch((err) => {
        console.log('Houve um erro naconexão com omongoDB: ', err);
    });