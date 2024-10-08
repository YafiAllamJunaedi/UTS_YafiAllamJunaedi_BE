import express from "express";
import { getAllMemberships } from "../controllers/MembershipController.js";
const membershipRoute = express.Router();

membershipRoute.get("/", getAllMemberships)


export default membershipRoute; 