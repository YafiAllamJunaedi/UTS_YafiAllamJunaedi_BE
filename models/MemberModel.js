import { DataTypes } from "sequelize";
import Trainer from "./TrainerModel.js";
import db from "../utils/connection.js";
import WorkoutSession from "./WorkoutSessionModel.js";

const Member = db.define("Member", {
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
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    join_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    tableName: "member"
}
)

Member.hasMany(WorkoutSession, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
WorkoutSession.belongsTo(Member, {
    foreignKey: "MemberId"
})
Trainer.hasMany(WorkoutSession, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
WorkoutSession.belongsTo(Trainer, {
    foreignKey: "TrainerId"
})

export default Member;