const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const mongoose = require('mongoose');

const path = require('path');

const PORT = 3000;

// config statics
app.use(express.static(path.join(__dirname, 'public')));

// config handlebars
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

// config body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

// config mongoose
mongoose.Promise = global.Promise;
const connectDB =  async () => {
    try {
        await mongoose.connect('mongodb://localhost/mega_crud');
        console.log('Conectado ao MongoDB');

    } catch (err) {
        console.log('Houve um erro ao tentar conectar-se com o MongoDB:/ ', err.message);
        process.exit(1);
    }
};

connectDB();

// Rotas
 app.get('/', (req, res) => {
    res.render('home');
 });




app.listen(PORT, console.log('Servidor ligado na porta: ',PORT));