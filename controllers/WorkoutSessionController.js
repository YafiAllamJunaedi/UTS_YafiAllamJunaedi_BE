import Member from "../models/MemberModel.js";
import Trainer from "../models/TrainerModel.js";
import WorkoutSession from "../models/WorkoutSessionModel.js";

export const getAllWorkoutSessions = async (req, res) => {
    try {
        const WorkoutSessions = await WorkoutSession.findAll(
            {
                include:
                [
                    {
                        model: Member,
                        as: "Member",
                        required: true
                    },
                    {
                        model: Trainer,
                        as: "Trainer",
                        required: true
                    }
                ]
            }
        );
        res.send(WorkoutSessions);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getWorkoutSessionById = async (req, res) => {
    const id = req.params.id;
    try {
        const WorkoutSessionId = await WorkoutSession.findByPk(id, 
            {
                include:
                [
                    {
                        model: Member,
                        as: "Member",
                        required: true
                    },
                    {
                        model: Trainer,
                        as: "Trainer",
                        required: true
                    }
                ]
            }
        );
        res.json(WorkoutSessionId || { message: "WorkoutSession not found" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const addWorkoutSession = async (req, res) => {
    const { date } = req.body;
    try {
        const newWorkoutSession = await WorkoutSession.create({
            date,
        });
        res.status(201).json(newWorkoutSession);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const deleteWorkoutSession = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await WorkoutSession.destroy({ where: { id } });
        res.json(result ? "WorkoutSession deleted" : "WorkoutSession not found");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateWorkoutSession = async (req, res) => {
    const id = req.params.id;
    const { name, speciality } = req.body;
    try {
        const result = await WorkoutSession.update(
            { name, speciality },
            { where: { id } }
        );
        res.json(result[0] ? "WorkoutSession updated" : "WorkoutSession not found");
    } catch (error) {
        res.status(400).send(error.message);
    }
};