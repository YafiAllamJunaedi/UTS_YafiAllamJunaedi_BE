import express from "express";
import { getAllTrainers, getTrainerById, addTrainer, deleteTrainer, updateTrainer } from "../controllers/TrainerController.js";
const trainerRoute = express.Router();

trainerRoute.get("/", getAllTrainers)
trainerRoute.get("/find/:id", getTrainerById)
trainerRoute.post("/create", addTrainer)
trainerRoute.delete("/delete/:id", deleteTrainer)
trainerRoute.put("/update/:id", updateTrainer)

export default trainerRoute;