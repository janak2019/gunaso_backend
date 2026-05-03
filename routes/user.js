import express from "express";
import {
  getUsers,
  createUsers,
  getUsersComplaints,
} from "../controllers/userController.js";

const router = express.Router();

// 👥 Get all staff
router.get("/", getUsers);

// ➕ Create staff
router.post("/", createUsers);

// 📥 Get complaints assigned to staff
router.get("/complaints/:id", getUsersComplaints);

export default router;