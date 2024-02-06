const express = require('express')
const app = express();
const port = 8086

app.set('view engine', 'ejs')

app.use(express.static(__dirname + 'style.css'))

app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/script.js')
})

app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/server.js')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})