import { forklifts } from "./forklift.js";
import { products } from "./product.js";
import { endpoints } from "./endpoint.js";
import { points } from "./point.js";
import { warehouses } from "./warehouses.js";
import { tasks } from "./task.js";


warehouses.hasMany(forklifts, { foreignKey: 'warehouse_id' });
forklifts.belongsTo(warehouses, { foreignKey: 'warehouse_id' });

warehouses.hasMany(tasks, { foreignKey: 'warehouse_id' });
tasks.belongsTo(warehouses, { foreignKey: 'warehouse_id' });

warehouses.hasMany(points, { foreignKey: 'warehouse_id' });
points.belongsTo(warehouses, { foreignKey: 'warehouse_id' });

forklifts.hasOne(tasks, { foreignKey: 'forklift_id' });
tasks.belongsTo(forklifts, {foreignKey: 'forklift_id'});

forklifts.hasOne(points, { foreignKey: 'forklift_id' });
points.belongsTo(forklifts, {foreignKey: 'forklift_id'});

tasks.hasOne(products, { foreignKey: 'task_id', attribute: 'product_id' });
products.belongsTo(tasks, {foreignKey: 'task_id'});

tasks.hasOne(endpoints, { foreignKey: 'task_id', attribute: 'endpoint_id' });
endpoints.belongsTo(tasks, { foreignKey: 'task_id'});

warehouses.hasMany(endpoints, { foreignKey: 'warehouse_id' });
endpoints.belongsTo(warehouses, { foreignKey: 'warehouse_id' });



