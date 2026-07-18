const express = require("express");
const router = express.Router();

const {
  createNotice,
  getNotices,
  getNoticeById,
  updateNotice,
  deleteNotice,
} = require("../controllers/noticeController");

const { protect } = require("../middleware/authMiddleware");

// Create Notice
router.post("/", protect, createNotice);

// Get All Notices
router.get("/", protect, getNotices);

// Get Single Notice
router.get("/:id", protect, getNoticeById);

// Update Notice
router.put("/:id", protect, updateNotice);

// Delete Notice
router.delete("/:id", protect, deleteNotice);

module.exports = router;