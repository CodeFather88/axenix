import { products } from "../model/product.js"

export const addProduct = async (req, res) => {
    const body = req.body
    await products.create({
        title: body.title
    }).then((result) => {
        if (!result) {
            return res.code(400).send({
                state: 0,
                message: 'Create product error'
            })
        }
        return res.send({ state: 1 })
    })
}

export const getProducts = async (req, res) => {
    await products.findAll().then(results => {
        return res.send({
            state: 1,
            data: results
        })
    })

}

export const getProduct = async (req, res, id) => {
    await products.findByPk(id).then(results => {
        if (results) {
            return res.code(404).send({ state: 0, message: 'Products not found' })
        }

        return res.send({
            state: 1
        })
    })

}

export const editProduct = async (req, res, id) => {
    let obj = req.body

    let search = await products.findByPk(id)
    if (search) {
        return res.code(404).send({ state: 0, message: 'Products not found' })
    }

    products.update(obj, {
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error editing products' })
        }

        return res.send({
            state: 1
        })
    })
}

export const deleteProduct = async (req, res) => {
    let id = req.body.id

    products.destroy({
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error deleting products' })
        }

        return res.send({
            state: 1
        })
    })
}