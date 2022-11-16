const models = require("../models")

module.exports = {
    getCategories: async (req, res) => {
        try {
            let response = await models.categories.findAll()
            res.status(200).send(response)
        }
        catch (e) {
            res.status(400).send(e);
        }
    },
    getProductOfCategories: async (req, res) => {
        try {
            let { id } = req.params
            let response = await models.categories.findOne({
                where: {
                    id: id
                },
                include: {
                    model: models.products,
                    as: "products"
                }
            })

            res.status(200).send(response)
        }
        catch (e) {
            res.status(400).send(e);
        }
    }
}