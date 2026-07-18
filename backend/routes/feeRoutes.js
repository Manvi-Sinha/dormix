const express = require("express");
const router = express.Router();

const {
  createFee,
  getFees,
  getFeeById,
  updateFee,
  deleteFee,
} = require("../controllers/feeController");

const { protect } = require("../middleware/authMiddleware");

// Create Fee
router.post("/", protect, createFee);

// Get All Fees
router.get("/", protect, getFees);

// Get Single Fee
router.get("/:id", protect, getFeeById);

// Update Fee
router.put("/:id", protect, updateFee);

// Delete Fee
router.delete("/:id", protect, deleteFee);

module.exports = router;