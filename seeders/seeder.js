import Membership from "../models/MembershipModel.js";
import Member from "../models/MemberModel.js";
import Trainer from "../models/TrainerModel.js";
import WorkoutSession from "../models/WorkoutSessionModel.js";
import Room from "../models/RoomModel.js";


const CreateSeeder = async () => {
    
    const membership1 = await Membership.create({
        type: "Regular",
        price: 300000
    })
    const membership2 = await Membership.create({
        type: "Premium",
        price: 500000
    })
    const membership3 = await Membership.create({
        type: "Advanced",
        price: 700000
    })

    const member1 = await Member.create({
        name: "Danis",
        age: 15,
        join_date: new Date(),
        MembershipId: membership1.dataValues.id
    })

    const member2 = await Member.create({
        name: "Pajri",
        age: 16,
        join_date: new Date(),
        MembershipId: membership2.dataValues.id
    })
    const member3 = await Member.create({
        name: "Reza",
        age: 17,
        join_date: "2024-08-21",
        MembershipId: membership3.dataValues.id
    })

    const trainer = await Trainer.create({
        name: "Zharif",
        speciality: "Bulking"
    });

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

    const room1 = await Room.create({
        room_name: "Pilates Room",
        WorkoutSessionId: workoutsession.dataValues.id
    })
}

const data = await CreateSeeder();
console.log(data)