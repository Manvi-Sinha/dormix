const Student = require("../models/Student");
const Room = require("../models/Room");
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

  // Check if room exists
  const selectedRoom = await Room.findById(room);

  if (!selectedRoom) {
    res.status(404);
    throw new Error("Room not found");
  }

  // Check if room is full
  if (selectedRoom.occupied >= selectedRoom.capacity) {
    res.status(400);
    throw new Error("Room is already full");
  }

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

  // Increase occupied count
  selectedRoom.occupied += 1;

  // Update room status
  if (selectedRoom.occupied >= selectedRoom.capacity) {
    selectedRoom.status = "Full";
  } else {
    selectedRoom.status = "Available";
  }

  await selectedRoom.save();

  res.status(201).json({
    success: true,
    message: "Student added successfully",
    student,
  });
});

// Get All Students
const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find().populate("room");

  res.status(200).json({
    success: true,
    count: students.length,
    students,
  });
});

// Get Single Student By ID
const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id).populate("room");

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
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).populate("room");

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
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }

  // Reduce occupied count
  if (student.room) {
    const room = await Room.findById(student.room);

    if (room) {
      room.occupied = Math.max(0, room.occupied - 1);

      if (room.occupied < room.capacity) {
        room.status = "Available";
      }

      await room.save();
    }
  }

  await student.deleteOne();

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