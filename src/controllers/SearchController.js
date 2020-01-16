const Dev = require('../models/Dev')
const parseStringasArray = require('../utils/parseStringAsArray')
//buscar devs no raio de 10km e filtro de tec
module.exports = {
    async index(req, res) {
        const { longitude, latitude, techs } = req.query
        console.log(longitude)
        console.log(latitude)
        console.log(techs)
        const techsArray = parseStringasArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 100000
                },
            },
        })

        return res.json({ devs: devs })
    }
}