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

  const selectedRoom = await Room.findById(room);

  if (!selectedRoom) {
    res.status(404);
    throw new Error("Room not found");
  }

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

  selectedRoom.occupied += 1;
  selectedRoom.status =
    selectedRoom.occupied >= selectedRoom.capacity
      ? "Full"
      : "Available";

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

// Get Single Student
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
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }

  // Room changed
  if (req.body.room && req.body.room !== student.room?.toString()) {
    const oldRoom = await Room.findById(student.room);
    const newRoom = await Room.findById(req.body.room);

    if (!newRoom) {
      res.status(404);
      throw new Error("New room not found");
    }

    if (newRoom.occupied >= newRoom.capacity) {
      res.status(400);
      throw new Error("New room is already full");
    }

    // Remove from old room
    if (oldRoom) {
      oldRoom.occupied = Math.max(0, oldRoom.occupied - 1);
      oldRoom.status =
        oldRoom.occupied >= oldRoom.capacity ? "Full" : "Available";
      await oldRoom.save();
    }

    // Add to new room
    newRoom.occupied += 1;
    newRoom.status =
      newRoom.occupied >= newRoom.capacity ? "Full" : "Available";
    await newRoom.save();
  }

  Object.assign(student, req.body);

  await student.save();

  const updatedStudent = await Student.findById(student._id).populate("room");

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
    student: updatedStudent,
  });
});

// Delete Student
const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }

  if (student.room) {
    const room = await Room.findById(student.room);

    if (room) {
      room.occupied = Math.max(0, room.occupied - 1);
      room.status =
        room.occupied >= room.capacity ? "Full" : "Available";

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