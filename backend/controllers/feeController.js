const Fee = require("../models/Fee");
const Student = require("../models/Student");
const asyncHandler = require("../middleware/asyncHandler");

// Create Fee
const createFee = asyncHandler(async (req, res) => {
  const { student, month, amount, dueDate } = req.body;

  const studentExists = await Student.findById(student);

  if (!studentExists) {
    res.status(404);
    throw new Error("Student not found");
  }

  const fee = await Fee.create({
    student,
    month,
    amount,
    dueDate,
  });

  res.status(201).json({
    success: true,
    message: "Fee created successfully",
    fee,
  });
});

// Get All Fees
const getFees = asyncHandler(async (req, res) => {
  const fees = await Fee.find().populate({
    path: "student",
    populate: {
      path: "room",
      select: "roomNumber",
    },
  });

  res.status(200).json({
    success: true,
    fees,
  });
});

// Get Single Fee
const getFeeById = asyncHandler(async (req, res) => {
  const fee = await Fee.findById(req.params.id).populate({
    path: "student",
    populate: {
      path: "room",
      select: "roomNumber",
    },
  });

  if (!fee) {
    res.status(404);
    throw new Error("Fee not found");
  }

  res.status(200).json({
    success: true,
    fee,
  });
});

// Update Fee
const updateFee = asyncHandler(async (req, res) => {
  const fee = await Fee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).populate({
    path: "student",
    populate: {
      path: "room",
      select: "roomNumber",
    },
  });

  if (!fee) {
    res.status(404);
    throw new Error("Fee not found");
  }

  res.status(200).json({
    success: true,
    message: "Fee updated successfully",
    fee,
  });
});

// Delete Fee
const deleteFee = asyncHandler(async (req, res) => {
  const fee = await Fee.findByIdAndDelete(req.params.id);

  if (!fee) {
    res.status(404);
    throw new Error("Fee not found");
  }

  res.status(200).json({
    success: true,
    message: "Fee deleted successfully",
  });
});

module.exports = {
  createFee,
  getFees,
  getFeeById,
  updateFee,
  deleteFee,
};