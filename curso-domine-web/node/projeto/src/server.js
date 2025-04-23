const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/produtos', (req, res, next) => {
    res.send(database.getProdutos()) // ".send" converterá o obj para JSON
})

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(database.getProduto(id))
})

app.post('/produto', (req, res, next) => {
    const produto = database.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}.`)
})