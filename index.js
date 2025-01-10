const express = require('express'); const app = express(); 
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize'); 

// Configuração do Template Engine 
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' })); 
app.set('view engine', 'handlebars');

// conexão como o banco de dados MySql
const sequelize = new Sequelize('world', 'root', 'Kiaq7900', {
    host: "localhost",
    dialect: "mysql"
});

//Rotas
app.get('/cad', (req, res) => {
    res.render('formulario')
})

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081')
});

