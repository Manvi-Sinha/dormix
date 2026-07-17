const express = require("express");
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");

// Register
router.post("/register", registerAdmin);

// Login
router.post("/login", loginAdmin);

// Protected Test Route
router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    admin: req.admin,
  });
});

module.exports = router;