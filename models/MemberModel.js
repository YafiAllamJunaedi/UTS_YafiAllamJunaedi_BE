import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import Membership from "./MembershipModel.js";
import Trainer from "./TrainerModel.js";
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
})


Membership.hasOne(Member, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
Member.belongsTo(Membership, {
    foreignKey: "MembershipId"
})
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