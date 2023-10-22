import { warehouses } from "../model/warehouses.js"
import { forklifts } from "../model/forklift.js"
import { points } from "../model/point.js";
import { tasks } from "../model/task.js";

export const getWarehouseMap = async (req, res, id) => {
    await warehouses.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: forklifts
            },
            {
                model: tasks
            },
            {
                model: points
            }
        ]
    }).then(async result => {
        if (!result) {
            return res.code(404).send({ state: 0, message: 'Warehouses not found' })
        }
        let data = await result.get({ plain: true })
        return res.send({
            data: data,
            state: 1
        })
    })
}

