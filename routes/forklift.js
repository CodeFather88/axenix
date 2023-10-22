import { addForklift, getForklifts, getForklift, editForklift, deleteForklift } from "../controllers/forklift_controller.js";
// import {ROLES_LIST} from "../config/roles_list.js"
// import {verifyRoles} from "../middleware/verifyRoles.js"

export default async function forklift_routes(fastify) {

    fastify.post("/",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await addForklift(request, reply)
    })

    fastify.post("/:id",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await editForklift(request, reply, id)
    })

    fastify.post("/delete",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await deleteForklift(request, reply)
    })

    fastify.get("/", {
        // preHandler: fastify.verifyJWT
    },  async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await getForklifts(request, reply)
    })

    fastify.get("/:id",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await getForklift(request, reply, id)
    })
}