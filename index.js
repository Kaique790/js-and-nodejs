const port = 8080
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// config handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Executando servidor na porta: ${port}`);
});
