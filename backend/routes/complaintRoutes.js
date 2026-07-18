const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

const { protect } = require("../middleware/authMiddleware");

// Create Complaint
router.post("/", protect, createComplaint);

// Get All Complaints
router.get("/", protect, getComplaints);

// Get Single Complaint
router.get("/:id", protect, getComplaintById);

// Update Complaint
router.put("/:id", protect, updateComplaint);

// Delete Complaint
router.delete("/:id", protect, deleteComplaint);

module.exports = router;