import Trainer from "../models/TrainerModel.js";

export const getAllTrainers = async (req, res) => {
    try {
        const Trainers = await Trainer.findAll();
        res.send(Trainers);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getTrainerById = async (req, res) => {
    const id = req.params.id;
    try {
        const TrainerId = await Trainer.findByPk(id);
        res.json(TrainerId || { message: "Trainer not found" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const addTrainer = async (req, res) => {
    const { name, speciality } = req.body;
    try {
        const newTrainer = await Trainer.create({
            name,
            speciality,
        });
        res.status(201).json(newTrainer);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const deleteTrainer = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Trainer.destroy({ where: { id } });
        res.json(result ? "Trainer deleted" : "Trainer not found");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateTrainer = async (req, res) => {
    const id = req.params.id;
    const { name, speciality } = req.body;
    try {
        const result = await Trainer.update(
            { name, speciality },
            { where: { id } }
        );
        res.json(result[0] ? "Trainer updated" : "Trainer not found");
    } catch (error) {
        res.status(400).send(error.message);
    }
};
