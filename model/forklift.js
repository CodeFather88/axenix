import Sequelize from "sequelize"
import {db} from "../config/db.js"



export const forklifts = db.define('forklift', {
    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    warehouse_id: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    load_capacity: {
        type: Sequelize.INTEGER
    },
    maintenance_date: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status:{
        type: Sequelize.INTEGER,
    },
    total_mileage:{
        type: Sequelize.DOUBLE
    },
    mileage_affter_maintenance:{
        type: Sequelize.DOUBLE
    },
    last_point_id: {
        type: Sequelize.INTEGER
    },
    task_id: {
        type: Sequelize.INTEGER
    },
    point_id: {
        type: Sequelize.INTEGER
    }

}, 
{
    // freezeTableName: true,
    // timestamps: false,
    indexes:[
        {
            unique: true,
            fields: ['id']
        }
    ]
}
)

forklifts.sync()