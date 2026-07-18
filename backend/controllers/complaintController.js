const Complaint = require("../models/Complaint");
const Student = require("../models/Student");
const asyncHandler = require("../middleware/asyncHandler");

// Create Complaint
const createComplaint = asyncHandler(async (req, res) => {
  const { student, title, description, category } = req.body;

  const studentExists = await Student.findById(student);

  if (!studentExists) {
    res.status(404);
    throw new Error("Student not found");
  }

  const complaint = await Complaint.create({
    student,
    title,
    description,
    category,
  });

  res.status(201).json({
    success: true,
    message: "Complaint created successfully",
    complaint,
  });
});

// Get All Complaints
const getComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find().populate("student");

  res.status(200).json({
    success: true,
    count: complaints.length,
    complaints,
  });
});

// Get Single Complaint
const getComplaintById = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.params.id).populate("student");

  if (!complaint) {
    res.status(404);
    throw new Error("Complaint not found");
  }

  res.status(200).json({
    success: true,
    complaint,
  });
});

// Update Complaint
const updateComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  ).populate("student");

  if (!complaint) {
    res.status(404);
    throw new Error("Complaint not found");
  }

  res.status(200).json({
    success: true,
    message: "Complaint updated successfully",
    complaint,
  });
});

// Delete Complaint
const deleteComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findByIdAndDelete(req.params.id);

  if (!complaint) {
    res.status(404);
    throw new Error("Complaint not found");
  }

  res.status(200).json({
    success: true,
    message: "Complaint deleted successfully",
  });
});

module.exports = {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
};