const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringasArray = require('../utils/parseStringAsArray')
module.exports = {
    //Consultar todos os devs cadastrados
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs)
    },

    //Cadastrar um Dev
    async store(req, res) {
        //pegando os dados da requisição no body fazendo desestruturação
        const { github_username, techs, latitude, longitude } = req.body
        //consultando api do github utilizando o pacote axios
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            //pegando os dados da requisição na api do git e pegando somente os dados que preciso atraves da desestruturação
            let { name = login, avatar_url, bio } = apiResponse.data

            // transformando a string de de tecnologias do dev em lista e tirando espaços do começo ou fim
            const techsArray = parseStringasArray(techs)

            //setando longitude e latidude
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            //enviando os dados para serem cadastrados
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
        return res.json(dev)
    },
    async update() {

    },
    async destroy() {

    }
}