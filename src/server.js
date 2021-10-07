const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (res) => {
  res.send(database.getProdutos())
})

app.get('/produtos/:id', (req, res) =>{
  res.send(database.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
  const produto = database.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res) => {
  const produto = database.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
  const produto = database.excluirProduto(req.params.id)
  res.send(produto)
})

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})