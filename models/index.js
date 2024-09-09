import db from "../utils/connection.js"
import Trainer from "./TrainerModel.js"
import Member from "./MemberModel.js"
import WorkoutSession from "./WorkoutSessionModel.js";

await Trainer.sync();
await Member.sync();
await WorkoutSession.sync();
await db.sync();