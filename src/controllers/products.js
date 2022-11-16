const models = require("../models")

module.exports = {
    getProducts: async (req, res) => {
        try {
            let response = await models.products.findAll()
            res.status(200).send(response)
        }
        catch (e) {
            res.status(400).send(e);
        }
    },
    getProductsSingle: async (req, res) => {
        try {
            let { id } = req.params
            let response = await models.products.findOne({
                where: {
                    id: id
                }
            })

            res.status(200).send(response)
        }
        catch (e) {
            res.status(400).send(e);
        }
    }
}