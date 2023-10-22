import { warehouses } from "../model/warehouses.js"
import { forklifts } from "../model/forklift.js"
import { points } from "../model/point.js";
import { tasks } from "../model/task.js";

export const handle = async (req, res) => {
    let forklift_id = req.body.forklift_id
    let warehouse_id = req.body.warehouse_id
    let handler_type = req.body.handler_type
    let handler_entity = req.body.handler_entity

    switch (handler_type){
        case 'started the task':

    }

    if (handler_type == 'started the task'){
        forklifts.updateOne({where: {id: forklift_id}}, {
            last_point_id: 1,
            point_id: 1,
            status: 1
        })
        tasks.updateOne({where: {id: handler_entity}}, {
            forklift_id: forklift_id,
            status: 1
        })
    }

    
    // if (!result) {
    //     return res.code(404).send({ state: 0, message: 'Warehouses not found' })
    // }
    // let data = await result.get({ plain: true })
    // return res.send({
    //     data: data,
    //     state: 1
    // })
}

