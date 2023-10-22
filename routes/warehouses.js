import { addWarehouse, getWarehouses, getWarehouse, editWarehouse, deleteWarehouse } from "../controllers/warehouses_controller.js";
// import {ROLES_LIST} from "../config/roles_list.js"
// import {verifyRoles} from "../middleware/verifyRoles.js"

export default async function warehouses_routes(fastify) {

    fastify.post("/",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await addWarehouse(request, reply)
    })

    fastify.post("/:id",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await editWarehouse(request, reply, id)
    })

    fastify.post("/delete",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await deleteWarehouse(request, reply)
    })

    fastify.get("/", {
        // preHandler: fastify.verifyJWT
    },  async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await getWarehouses(request, reply)
    })

    fastify.get("/:id",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await getWarehouse(request, reply, id)
    })
}