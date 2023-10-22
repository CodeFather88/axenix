import { getWarehouseMap } from "../controllers/tracking_controller.js";
// import {ROLES_LIST} from "../config/roles_list.js"
// import {verifyRoles} from "../middleware/verifyRoles.js"

export default async function tracking_routes(fastify) {

    fastify.get("/warehouses/:id/map", {
        // preHandler: fastify.verifyJWT
    },  async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await getWarehouseMap(request, reply, id)
    })

}