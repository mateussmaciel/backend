const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express();
//linha para conexão com base mongoDb na nuvem
mongoose.connect('mongodb+srv://mateus:mateusomnistack@cluster0-fdtn2.mongodb.net/omnistack?retryWrites=true&w=majority', {
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
app.listen(3333)