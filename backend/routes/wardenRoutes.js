const express = require("express");
const router = express.Router();

const {
  createWarden,
  getWardens,
  getWardenById,
  updateWarden,
  deleteWarden,
} = require("../controllers/wardenController");

const { protect } = require("../middleware/authMiddleware");

// Create Warden
router.post("/", protect, createWarden);

// Get All Wardens
router.get("/", protect, getWardens);

// Get Single Warden
router.get("/:id", protect, getWardenById);

// Update Warden
router.put("/:id", protect, updateWarden);

// Delete Warden
router.delete("/:id", protect, deleteWarden);

module.exports = router;