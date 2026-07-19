const express = require("express");
const router = express.Router();

const {
  getAdminDashboard,
} = require("../controllers/dashboardController");

const { protect } = require("../middleware/authMiddleware");

router.get("/admin", protect, getAdminDashboard);

module.exports = router;