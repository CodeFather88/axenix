import { addPoint, getPoints, getPoint, editPoint, deletePoint } from "../controllers/point_controller.js";
// import {ROLES_LIST} from "../config/roles_list.js"
// import {verifyRoles} from "../middleware/verifyRoles.js"

export default async function point_routes(fastify) {

    fastify.post("/",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await addPoint(request, reply)
    })

    fastify.post("/:id",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await editPoint(request, reply, id)
    })

    fastify.post("/delete",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await deletePoint(request, reply)
    })

    fastify.get("/", {
        // preHandler: fastify.verifyJWT
    },  async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        await getPoints(request, reply)
    })

    fastify.get("/:id",{
        // preHandler: fastify.verifyJWT
    }, async (request, reply) => {
        // await verifyRoles(request, reply, [ROLES_LIST.Admin])
        const id = request.params.id
        await getPoint(request, reply, id)
    })
}