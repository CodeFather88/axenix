import Sequelize from "sequelize"
import {db} from "../config/db.js"

export const products = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    task_id: {
        type: Sequelize.INTEGER
    }
   

})



products.sync()