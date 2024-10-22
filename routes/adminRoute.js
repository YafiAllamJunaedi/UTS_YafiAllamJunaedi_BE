import express from "express";
import { getAllAdmins, getAdminById, addAdmin, deleteAdmin, updateAdmin, loginAdmin } from "../controllers/AdminController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const adminRoute = express.Router();

adminRoute.get("/", verifyToken, getAllAdmins)
adminRoute.get("/find/:id", verifyToken, getAdminById)
adminRoute.post("/create", verifyToken, addAdmin)
adminRoute.delete("/delete/:id", verifyToken, deleteAdmin)
adminRoute.put("/update/:id", verifyToken, updateAdmin)
adminRoute.post("/login", verifyToken, loginAdmin)

export default adminRoute;