import express from "express";
import {
  createComplaint,
  getComplaints,
  updateStatus,
  trackComplaint,
  getStats,
} from "../controllers/complaintController.js";

const router = express.Router();

router.post("/", createComplaint);
router.get("/", getComplaints);
router.put("/:id", updateStatus);
router.get("/track/:mobile", trackComplaint);
router.get("/stats", getStats);

export default router;