import Sequelize from "sequelize"
import {db} from "../config/db.js"

export const points = db.define('point', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    forklift_id: {
        type: Sequelize.INTEGER
    },
    warehouse_id: {
        type: Sequelize.INTEGER
    },
    coord_x: {
        type: Sequelize.INTEGER
    },
    coord_y: {
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

points.sync()