import Membership from "./MembershipModel.js";
import Member from "./MemberModel.js";
import Trainer from "./TrainerModel.js";
import WorkoutSession from "./WorkoutSessionModel.js";
import Room from "./RoomModel.js";
import db from "../utils/connection.js";

await Membership.sync();
await Member.sync();
await Trainer.sync();
await WorkoutSession.sync();
await Room.sync();

await db.sync();