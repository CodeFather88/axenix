import { warehouses } from "../model/warehouses.js"

export const addWarehouse = async (req, res) => {
    const body = req.body
    await warehouses.create({
        title: body.title
    }).then((result) => {
        if (!result) {
            return res.code(400).send({
                state: 0,
                message: 'Create warehouse error'
            })
        }
        return res.send({ state: 1 })
    })
}

export const getWarehouses = async (req, res) => {
    await warehouses.findAll().then(results => {
        return res.send({
            state: 1,
            data: results
        })
    })

}

export const getWarehouse = async (req, res, id) => {
    await warehouses.findByPk(id).then(results => {
        if (results) {
            return res.code(404).send({ state: 0, message: 'Warehouses not found' })
        }

        return res.send({
            state: 1
        })
    })

}

export const editWarehouse = async (req, res, id) => {
    let obj = req.body

    let search = await warehouses.findByPk(id)
    if (search) {
        return res.code(404).send({ state: 0, message: 'Warehouses not found' })
    }

    warehouses.update(obj, {
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error editing warehouses' })
        }

        return res.send({
            state: 1
        })
    })
}

export const deleteWarehouse = async (req, res) => {
    let id = req.body.id

    warehouses.destroy({
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error deleting warehouses' })
        }

        return res.send({
            state: 1
        })
    })
}