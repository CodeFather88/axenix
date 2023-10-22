import { tasks } from "../model/task.js"

export const addTask = async (req, res) => {
    const body = req.body
    await tasks.create({
        title: body.title
    }).then((result) => {
        if (!result) {
            return res.code(400).send({
                state: 0,
                message: 'Create task error'
            })
        }
        return res.send({ state: 1 })
    })
}

export const getTasks = async (req, res) => {
    await tasks.findAll().then(results => {
        return res.send({
            state: 1,
            data: results
        })
    })

}

export const getTask = async (req, res, id) => {
    await tasks.findByPk(id).then(results => {
        if (results) {
            return res.code(404).send({ state: 0, message: 'Task not found' })
        }

        return res.send({
            state: 1
        })
    })

}

export const editTask = async (req, res, id) => {
    let obj = req.body

    let search = await tasks.findByPk(id)
    if (search) {
        return res.code(404).send({ state: 0, message: 'Task not found' })
    }

    tasks.update(obj, {
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error editing tasks' })
        }

        return res.send({
            state: 1
        })
    })
}

export const deleteTask = async (req, res) => {
    let id = req.body.id

    tasks.destroy({
        where: {
            id: id
        }
    }).then(result => {
        if (result) {
            return res.code(404).send({ state: 0, message: 'Error deleting tasks' })
        }

        return res.send({
            state: 1
        })
    })
}