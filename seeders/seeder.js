import Trainer from "../models/TrainerModel.js";
import Member from "../models/MemberModel.js";
import WorkoutSession from "../models/WorkoutSessionModel.js";

const CreateSeeder = async () => {
    const trainer = await Trainer.create({
        name: "Zharif",
        speciality: "Bulking"
    });
    
    const member1 = await Member.create({
        name: "Danis",
        age: 15,
        join_date: new Date(),

    })
    const member2 = await Member.create({
        name: "Pajri",
        age: 16,
        join_date: new Date(),

    })
    const member3 = await Member.create({
        name: "Reza",
        age: 17,
        join_date: "2024-08-21",

    })
    const workoutsession = await WorkoutSession.create({
        date: new Date(),
        MemberId: member1.dataValues.id,
        TrainerId: trainer.dataValues.id
    })
    const workoutsession2 = await WorkoutSession.create({
        date: new Date(),
        MemberId: member2.dataValues.id,
        TrainerId: trainer.dataValues.id
    })
    const workoutsession3 = await WorkoutSession.create({
        date: new Date(),
        MemberId: member3.dataValues.id,
        TrainerId: trainer.dataValues.id
    })

    const findWorkoutSessionByMember = await WorkoutSession.findAll({
        where: {
            MemberId: member1.dataValues.id
        },
        attributes: ["date"],
        include: [
            {
                model: Member, // model ini dari import di atas
                as: "Member",  // ini dari dalem file member(argumen1)
                require: true,
                attributes: ["id", "name", "age"]
            }
        ]
    })
    return findWorkoutSessionByMember;
}

const data = await CreateSeeder();
console.log(data)