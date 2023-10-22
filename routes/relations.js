import { forklifts } from "./forklift";
import { products } from "./product";
import { endpoints } from "./endpoint";
import { points } from "./point";
import { warehouses } from "./warehouses";
import { tasks } from "./task";


forklifts.hasOne(tasks)
tasks.belongsTo(forklifts)

forklifts.hasOne(points)
points.belongsTo(forklifts)

tasks.hasOne(products)
products.belongsTo(tasks)

tasks.hasOne(endpoints)
endpoints.belongsTo(tasks)

warehouses.hasMany(endpoints)
endpoints.belongsTo(warehouses)



