const Notice = require("../models/Notice");
const Admin = require("../models/Admin");
const asyncHandler = require("../middleware/asyncHandler");

// Create Notice
const createNotice = asyncHandler(async (req, res) => {
  const { title, description, audience } = req.body;

  const notice = await Notice.create({
    title,
    description,
    audience,
    createdBy: req.admin._id,
  });

  res.status(201).json({
    success: true,
    message: "Notice created successfully",
    notice,
  });
});

// Get All Notices
const getNotices = asyncHandler(async (req, res) => {
  const notices = await Notice.find().populate("createdBy", "-password");

  res.status(200).json({
    success: true,
    count: notices.length,
    notices,
  });
});

// Get Single Notice
const getNoticeById = asyncHandler(async (req, res) => {
  const notice = await Notice.findById(req.params.id).populate(
    "createdBy",
    "-password"
  );

  if (!notice) {
    res.status(404);
    throw new Error("Notice not found");
  }

  res.status(200).json({
    success: true,
    notice,
  });
});

// Update Notice
const updateNotice = asyncHandler(async (req, res) => {
  const notice = await Notice.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  ).populate("createdBy", "-password");

  if (!notice) {
    res.status(404);
    throw new Error("Notice not found");
  }

  res.status(200).json({
    success: true,
    message: "Notice updated successfully",
    notice,
  });
});

// Delete Notice
const deleteNotice = asyncHandler(async (req, res) => {
  const notice = await Notice.findByIdAndDelete(req.params.id);

  if (!notice) {
    res.status(404);
    throw new Error("Notice not found");
  }

  res.status(200).json({
    success: true,
    message: "Notice deleted successfully",
  });
});

module.exports = {
  createNotice,
  getNotices,
  getNoticeById,
  updateNotice,
  deleteNotice,
};