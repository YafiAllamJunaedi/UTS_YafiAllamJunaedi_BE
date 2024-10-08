import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Membership = db.define("Membership", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    tableName: "membership"
})

export default Membership;