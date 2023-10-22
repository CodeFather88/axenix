import { warehouses } from "../model/warehouses.js"
import { forklifts } from "../model/forklift.js"
import { points } from "../model/point.js";
import { tasks } from "../model/task.js";

export const handle = async (req, res) => {
    let forklift_id = req.body.forklift_id
    let warehouse_id = req.body.warehouse_id
    let handler_type = req.body.handler_type
    let handler_entity = req.body.handler_entity

    if (handler_type == 'started the task'){
        forklifts.updateOne({where: {id: forklift_id, warehouse_id: warehouse_id}}, {
            task_id: handler_entity,
            last_point_id: 1,
            point_id: 1,
            status: 1
        })
        tasks.updateOne({where: {id: handler_entity, warehouse_id: warehouse_id}}, {
            forklift_id: forklift_id,
            start_time: new Date(),
            status: 1
        })
    }
    else if (handler_type == 'reach the point'){
        points.findOne({where: {id: handler_entity}}).then(res => {
            if (!res){
                return res.code(404).send({ state: 0, message: 'point_id not found' })
            }
            forklifts.updateOne({where: {id: forklift_id, warehouse_id: warehouse_id}}, {
                point_id: handler_entity,
                status: 1
            })
        })

    }
    else if (handler_type == 'finished the task'){
        forklifts.updateOne({where: {id: forklift_id, warehouse_id: warehouse_id}}, {
            task_id: 0,
            point_id: 1,
            status: 0
        })
        tasks.updateOne({where: {id: handler_entity, warehouse_id: warehouse_id}}, {
            end_time: new Date(),
            status: 2
        })
    }


    // let data = await result.get({ plain: true })
    // return res.send({
    //     data: data,
    //     state: 1
    // })
}

