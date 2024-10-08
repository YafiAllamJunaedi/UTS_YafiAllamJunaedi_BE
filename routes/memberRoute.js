import express from "express";
import { getAllMembers, getMemberById, addMember, deleteMember, updateMember } from "../controllers/MemberController.js";
const memberRoute = express.Router();

memberRoute.get("/", getAllMembers)
memberRoute.get("/find/:id", getMemberById)
memberRoute.post("/create", addMember)
memberRoute.delete("/delete/:id", deleteMember)
memberRoute.put("/update/:id", updateMember)

export default memberRoute; 