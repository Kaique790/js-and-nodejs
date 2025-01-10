const express = require('express');
const app = express();

app.get ('/', function(req, res){
    res.sendFile(__dirname + '/html/index.html')
});

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/html/sobre.html')
});

app.get ('/blog', (req, res) => {
    res.send('Bem vindo ao blog')
});

app.get('/ola/:nome/:cargo', (req, res) => {
    res.send(`<h1>Olá, ${req.params.nome}!
        ! </h1> Seu cargo é ${req.params.cargo}`
    );
})

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081')
});

