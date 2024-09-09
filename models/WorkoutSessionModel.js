import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const WorkoutSession = db.define("WorkoutSession", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
},
{
    tableName: "workoutsession"
}
)

export default WorkoutSession;