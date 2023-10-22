import { addEndpoint, getEndpoints, getEndpoint, editEndpoint, deleteEndpoint } from "../controllers/endpoint_controller.js";
// import {ROLES_LIST} from "../config/roles_list.js"
// import {verifyRoles} from "../middleware/verifyRoles.js"

export default async function endpoint_routes(fastify) {

    fastify.post("/",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await addEndpoint(request, reply)
    })

    fastify.post("/:id",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await editEndpoint(request, reply, id)
    })

    fastify.post("/delete",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await deleteEndpoint(request, reply)
    })

    fastify.get("/", {
        // preHandler: fastify.verifyJWT
    },  async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await getEndpoints(request, reply)
    })

    fastify.get("/:id",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await getEndpoint(request, reply, id)
    })
}