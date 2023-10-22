import { points } from "../model/point.js"

export const addPoint = async (req, res) => {
    const body = req.body
    await points.create({
        title: body.title
    }).then((result) => {
        if (!result) {
            return res.code(400).send({
                state: 0,
                message: 'Create point error'
            })
        }
        return res.send({ state: 1 })
    })
}

export const getPoints = async (req, res) => {
    await points.findAll().then(results => {
        return res.send({
            state: 1,
            data: results
        })
    })

}

export const getPoint = async (req, res, id) => {
    await points.findByPk(id).then(results => {
        if (results) {
            return res.code(404).send({ state: 0, message: 'Points not found' })
        }

        return res.send({
            state: 1
        })
    })

}

export const editPoint = async (req, res, id) => {
    let obj = req.body

    let search = await points.findByPk(id)
    if (search) {
        return res.code(404).send({ state: 0, message: 'Points not found' })
    }

    points.update(obj, {
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error editing points' })
        }

        return res.send({
            state: 1
        })
    })
}

export const deletePoint = async (req, res) => {
    let id = req.body.id

    points.destroy({
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error deleting points' })
        }

        return res.send({
            state: 1
        })
    })
}