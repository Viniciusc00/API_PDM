const PratosModel = require('../model/pratos.model');

exports.pratos = async (req, res, next) => {
    try {
        const results = await PratosModel.find({}, { __v: 0, _id: 0 })
        res.json(results)

    } catch (error) {
        throw error
    }
}