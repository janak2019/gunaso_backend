import express from "express";
import {
  getStaffs,
  createStaff,
  getStaffComplaints,
} from "../controllers/staffController.js";

const router = express.Router();

// 👥 Get all staff
router.get("/", getStaffs);

// ➕ Create staff
router.post("/", createStaff);

// 📥 Get complaints assigned to staff
router.get("/complaints/:id", getStaffComplaints);

export default router;