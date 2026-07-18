const Student = require("../models/Student");
const asyncHandler = require("../middleware/asyncHandler");

// Create Student
const createStudent = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    gender,
    room,
    course,
    college,
    guardianName,
    guardianPhone,
    address,
  } = req.body;

  const student = await Student.create({
    name,
    email,
    phone,
    gender,
    room,
    course,
    college,
    guardianName,
    guardianPhone,
    address,
  });

  res.status(201).json({
    success: true,
    message: "Student added successfully",
    student,
  });
});

// Get All Students
const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find();

  res.status(200).json({
    success: true,
    count: students.length,
    students,
  });
});

// Get Single Student By ID
const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }

  res.status(200).json({
    success: true,
    student,
  });
});

// Update Student
const updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
    student,
  });
});

// Delete Student
const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }

  res.status(200).json({
    success: true,
    message: "Student deleted successfully",
  });
});

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};