const Room = require("../models/Room");
const Student = require("../models/Student");
const asyncHandler = require("../middleware/asyncHandler");

// Create Room
const createRoom = asyncHandler(async (req, res) => {
  const {
    roomNumber,
    block,
    floor,
    type,
    capacity,
    monthlyRent,
  } = req.body;

  const roomExists = await Room.findOne({ roomNumber });

  if (roomExists) {
    res.status(400);
    throw new Error("Room already exists");
  }

  const room = await Room.create({
    roomNumber,
    block,
    floor,
    type,
    capacity,
    monthlyRent,
  });

  res.status(201).json({
    success: true,
    message: "Room created successfully",
    room,
  });
});

// Get All Rooms
const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find();

  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

// Get Single Room
const getRoomById = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    res.status(404);
    throw new Error("Room not found");
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// Update Room
const updateRoom = asyncHandler(async (req, res) => {
  const room = await Room.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!room) {
    res.status(404);
    throw new Error("Room not found");
  }

  res.status(200).json({
    success: true,
    message: "Room updated successfully",
    room,
  });
});

// Delete Room
const deleteRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    res.status(404);
    throw new Error("Room not found");
  }

  const assignedStudents = await Student.countDocuments({
    room: room._id,
  });

  if (assignedStudents > 0) {
    res.status(400);
    throw new Error(
      "Cannot delete a room that has assigned students."
    );
  }

  await room.deleteOne();

  res.status(200).json({
    success: true,
    message: "Room deleted successfully",
  });
});

module.exports = {
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
};