import Fastify from "fastify"
import middle from "@fastify/middie"
import cookie from "@fastify/cookie"
import cors from "@fastify/cors"
// import user_routes from "./routes/user_routes.js"
// import auth from "./routes/auth.js"
// import refresh from "./routes/refresh.js"
import verifyJWT from "./middleware/verifyJWT.js"
import "./config/db.js"
import "./model/relations.js"
import warehouses_routes from "./routes/warehouses.js"
import endpoint_routes from "./routes/endpoint.js"
import task_routes from "./routes/task.js"
import forklift_routes from "./routes/forklift.js"
import point_routes from "./routes/point.js"
import product_routes from "./routes/product.js"
import tracking_routes from "./routes/tracking.js"



const fastify = Fastify({
    // logger: true
})
fastify.register(cors, (instance) => {
    return (req, callback) => {
      const corsOptions = {
        origin: true,
        credentials: true
      };
      callback(null, corsOptions)
    }
})

fastify.register(cookie, {
    secret: "l4mfnv2pinfpi0",
    hook: 'onRequest',
    parseOptions: {}
})
fastify.decorate('verifyJWT', verifyJWT)


fastify.register(middle)
// fastify.register(refresh, {prefix: '/api/refresh'})
// fastify.register(auth, {prefix: '/api/auth'})
// fastify.register(user_routes, {prefix: '/api/users'})
fastify.register(warehouses_routes, {prefix: '/api/warehouses'})
fastify.register(endpoint_routes, {prefix: '/api/endpoints'})
fastify.register(task_routes, {prefix: '/api/tasks'})
fastify.register(point_routes, {prefix: '/api/points'})
fastify.register(product_routes, {prefix: '/api/products'})
fastify.register(forklift_routes, {prefix: '/api/forklifts'})
fastify.register(tracking_routes, {prefix: '/api/tracking'})

fastify.listen({ port: process.env.PORT })

