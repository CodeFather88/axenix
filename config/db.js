import dotenv from "dotenv"
import path from "path"
import Sequelize from "sequelize"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({path: path.resolve(__dirname, '../.env')})

export const db = new Sequelize("axenix", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: "postgres",
    define: {
      logging: false
    }
})