import express from "express";
import { getAllWorkoutSessions, getWorkoutSessionById, addWorkoutSession, deleteWorkoutSession, updateWorkoutSession } from "../controllers/WorkoutSessionController.js";
const workoutSessionRoute = express.Router();

workoutSessionRoute.get("/", getAllWorkoutSessions)
workoutSessionRoute.get("/find/:id", getWorkoutSessionById)
workoutSessionRoute.post("/create", addWorkoutSession)
workoutSessionRoute.delete("/delete/:id", deleteWorkoutSession)
workoutSessionRoute.put("/update/:id", updateWorkoutSession)

export default workoutSessionRoute;