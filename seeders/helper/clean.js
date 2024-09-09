import Member from "../../models/MemberModel.js";
import Trainer from "../../models/TrainerModel.js";
import WorkoutSession from "../../models/WorkoutSessionModel.js";

const clean = async () => {
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

}

clean()