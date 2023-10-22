import Sequelize from "sequelize"
import {db} from "../config/db.js"

export const warehouses = db.define('warehouses', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    square: {
        type: Sequelize.INTEGER,
    },
    racking_number: {
        type: Sequelize.INTEGER,
    },
    current_workload: {
        type: Sequelize.INTEGER,
    },
    available_space: {
        type: Sequelize.INTEGER,
    },
    active_orders_number: {
        type: Sequelize.INTEGER,
    },
    status: {
        type: Sequelize.INTEGER,
    },
    contact: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
    
// }, {
//     freezeTableName: true,
//     timestamps: false,
//     indexes:[
//         {
//             unique: true,
//             fields: ['id']
//         },
//     ]
// })

// warehouses.sync({force: true})
warehouses.sync()