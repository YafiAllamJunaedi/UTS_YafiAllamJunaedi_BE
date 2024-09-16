import { Sequelize } from "sequelize";
import "dotenv/config"

// console.log("Database Name:", process.env.DB_NAME); 
const db = new Sequelize(process.env.DB_NAME, "root", "", {
    dialect: "mysql",
});
// try {
//     await db.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

export default db;