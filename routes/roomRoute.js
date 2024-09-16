import express from "express";
import { getAllRooms, getRoomById, addRoom, deleteRoom, updateRoom } from "../controllers/RoomController.js";
const roomRoute = express.Router()

roomRoute.get("/", getAllRooms)
roomRoute.get("/find/:id", getRoomById)
roomRoute.post("/create", addRoom)
roomRoute.delete("/delete/:id", deleteRoom)
roomRoute.put("/update/:id", updateRoom)

export default roomRoute;
