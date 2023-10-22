import Sequelize from "sequelize"
import {db} from "../config/db.js"

export const endpoints = db.define('endpoint', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    row: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // column: {
    //     type: Sequelize.INTEGER,
    //     // allowNull: false //джуненок добавил без синьора
    // },
    warehouse_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    endpoints_id: {
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

endpoints.sync()