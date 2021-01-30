const express = require('express')
const app = express()
const sinespApi = require('sinesp-api');
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscaCep')
const placaCarro = require('./src/functions/placaCarro')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/cep', (req, res) => {
    res.render('cep')
})

app.post('/cep', async (req, res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)   

    res.render('resultadoCep', {dado:resultado})
})

app.get('/veiculo', (req, res) => {
    res.render('veiculo')
})

app.post('/veiculo', async (req, res) => {
    const { placa } = req.body
    const placaResult = await sinespApi.search(placa)
    
    res.render('placaResultado', {dado: placaResult})
})

app.listen(3333)