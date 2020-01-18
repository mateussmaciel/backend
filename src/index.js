const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')
const {setupWebsocket} = require('./websocket')

const app = express();
const server = http.Server(app)

setupWebsocket(server)
//linha para conexão com base mongoDb na nuvem
mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//linha para fazer a api ter permissão para receber requisição de outro endereço. api na porta 3333 app na 3000
app.use(cors())
//linha para fazer entender requisições json
app.use(express.json())
//linha para executar as rotas requisitadas
app.use(routes)

//porta a ser usada no localhost
server.listen(3333)