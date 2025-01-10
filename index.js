const express = require('express'); const app = express(); 
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize'); 

// Config
    // Template Engine 
        app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' })); 
        app.set('view engine', 'handlebars');
    //body Parser
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json())
    // conexão com MySql
        const sequelize = new Sequelize('world', 'root', 'Kiaq7900', {
            host: "localhost",
            dialect: "mysql"
    });

//Rotas
app.get('/cad', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    res.send(`Texto: ${req.body.titulo} Conteudo: ${req.body.conteudo}`);
})

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081')
});
