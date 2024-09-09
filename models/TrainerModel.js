import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Trainer = db.define("Trainer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    speciality: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: "trainer"
});

export default Trainer;