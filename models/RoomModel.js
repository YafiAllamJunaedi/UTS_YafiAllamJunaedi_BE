import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import WorkoutSession from "./WorkoutSessionModel.js";

const Room = db.define("Room", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    room_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: "room"
})

WorkoutSession.hasOne(Room, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
Room.belongsTo(WorkoutSession, {
    foreignKey: "WorkoutSessionId"
})

export default Room;