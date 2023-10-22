import { addTask, getTasks, getTask, editTask, deleteTask } from "../controllers/tasks_controller.js";
// import {ROLES_LIST} from "../config/roles_list.js"
// import {verifyRoles} from "../middleware/verifyRoles.js"

export default async function task_routes(fastify) {

    fastify.post("/",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await addTask(request, reply)
    })

    fastify.post("/:id",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await editTask(request, reply, id)
    })

    fastify.post("/delete",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await deleteTask(request, reply)
    })

    fastify.get("/", {
        // preHandler: fastify.verifyJWT
    },  async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await getTasks(request, reply)
    })

    fastify.get("/:id",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await getTask(request, reply, id)
    })
}