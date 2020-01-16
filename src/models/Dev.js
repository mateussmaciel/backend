const mongoose = require('mongoose')
const PointSchema = require('./utils/PontiSchema')
//criação do schema(objeto) para ser enviado todos os dados necessarios para serem cadastrados na base
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
})

module.exports = mongoose.model('Dev', DevSchema)