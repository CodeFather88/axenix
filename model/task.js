import Sequelize from "sequelize"
import {db} from "../config/db.js"

export const tasks = db.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    endpoint_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    start_time:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    end_time:{
        type: Sequelize.INTEGER
    },
    status:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    distance: {
        type: Sequelize.INTEGER,
    },
    forklift_id: {
        type: Sequelize.INTEGER,
    },
    warehouse_id: {
        type: Sequelize.INTEGER
    }

}, 
// {
    // freezeTableName: true,
    // timestamps: false,
    // indexes:[
    //     {
    //         unique: true,
    //         fields: ['id']
    //     },
    // ]
// }
)

// tasks.sync({force:true})
tasks.sync()