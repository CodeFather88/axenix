import { forklifts } from "../model/forklift.js"

export const addForklift = async (req, res) => {
    const body = req.body
    await forklifts.create({
        title: body.title
    }).then((result) => {
        if (!result) {
            return res.code(400).send({
                state: 0,
                message: 'Create forklift error'
            })
        }
        return res.send({ state: 1 })
    })
}

export const getForklifts = async (req, res) => {
    await forklifts.findAll().then(results => {
        return res.send({
            state: 1,
            data: results
        })
    })

}

export const getForklift = async (req, res, id) => {
    await forklifts.findByPk(id).then(results => {
        if (results) {
            return res.code(404).send({ state: 0, message: 'Forklifts not found' })
        }

        return res.send({
            state: 1
        })
    })

}

export const editForklift = async (req, res, id) => {
    let obj = req.body

    let search = await forklifts.findByPk(id)
    if (search) {
        return res.code(404).send({ state: 0, message: 'Forklifts not found' })
    }

    forklifts.update(obj, {
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error editing forklifts' })
        }

        return res.send({
            state: 1
        })
    })
}

export const deleteForklift = async (req, res) => {
    let id = req.body.id

    forklifts.destroy({
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error deleting forklifts' })
        }

        return res.send({
            state: 1
        })
    })
}