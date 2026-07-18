const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const { protect } = require("../middleware/authMiddleware");

// Create Student
router.post("/", protect, createStudent);

// Get All Students
router.get("/", protect, getStudents);

// Get Single Student
router.get("/:id", protect, getStudentById);

//Update Student
router.put("/:id", protect, updateStudent);

// Delete Student
router.delete("/:id", protect, deleteStudent);

module.exports = router;