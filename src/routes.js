const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

//rota para consultar todos os devs
routes.get('/devs', DevController.index)
//rota para cadastrar dev
routes.post('/devs', DevController.store)
//rota para pesquisar dev por filtro de tec
routes.get('/search', SearchController.index)

module.exports = routes