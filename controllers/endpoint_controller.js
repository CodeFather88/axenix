import { endpoints } from "../model/endpoint.js"

export const addEndpoint = async (req, res) => {
    const body = req.body
    await endpoints.create({
        title: body.title
    }).then((result) => {
        if (!result) {
            return res.code(400).send({
                state: 0,
                message: 'Create endpoint error'
            })
        }
        return res.send({ state: 1 })
    })
}

export const getEndpoints = async (req, res) => {
    await endpoints.findAll().then(results => {
        return res.send({
            state: 1,
            data: results
        })
    })

}

export const getEndpoint = async (req, res, id) => {
    await endpoints.findByPk(id).then(results => {
        if (results) {
            return res.code(404).send({ state: 0, message: 'Endpoints not found' })
        }

        return res.send({
            state: 1
        })
    })

}

export const editEndpoint = async (req, res, id) => {
    let obj = req.body

    let search = await endpoints.findByPk(id)
    if (search) {
        return res.code(404).send({ state: 0, message: 'Endpoints not found' })
    }

    endpoints.update(obj, {
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error editing endpoints' })
        }

        return res.send({
            state: 1
        })
    })
}

export const deleteEndpoint = async (req, res) => {
    let id = req.body.id

    endpoints.destroy({
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error deleting endpoints' })
        }

        return res.send({
            state: 1
        })
    })
}