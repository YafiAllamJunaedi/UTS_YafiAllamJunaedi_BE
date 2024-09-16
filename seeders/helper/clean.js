import Membership from "../../models/MembershipModel.js";
import Member from "../../models/MemberModel.js";
import Trainer from "../../models/TrainerModel.js";
import WorkoutSession from "../../models/WorkoutSessionModel.js";
import Room from "../../models/RoomModel.js";


const clean = async () => {
    await Membership.destroy({
        where: {},
        force: true,
        cascade: true
    })
    await Member.destroy({
        where: {},
        force: true,
        cascade: true
    })
    await Trainer.destroy({
        where: {},
        force: true,
        cascade: true
    })
    await WorkoutSession.destroy({
        where: {},
        force: true,
        cascade: true
    })
    await Room.destroy({
        where: {},
        force: true,
        cascade: true
    })

}

clean()