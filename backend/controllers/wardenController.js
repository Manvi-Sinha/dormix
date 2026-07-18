const Warden = require("../models/Warden");
const asyncHandler = require("../middleware/asyncHandler");

// Create Warden
const createWarden = asyncHandler(async (req, res) => {
  const { name, email, phone, gender, block, address, joiningDate, status } =
    req.body;

  const existingWarden = await Warden.findOne({ email });

  if (existingWarden) {
    res.status(400);
    throw new Error("Warden with this email already exists");
  }

  const warden = await Warden.create({
    name,
    email,
    phone,
    gender,
    block,
    address,
    joiningDate,
    status,
  });

  res.status(201).json({
    success: true,
    message: "Warden created successfully",
    warden,
  });
});

// Get All Wardens
const getWardens = asyncHandler(async (req, res) => {
  const wardens = await Warden.find();

  res.status(200).json({
    success: true,
    count: wardens.length,
    wardens,
  });
});

// Get Single Warden
const getWardenById = asyncHandler(async (req, res) => {
  const warden = await Warden.findById(req.params.id);

  if (!warden) {
    res.status(404);
    throw new Error("Warden not found");
  }

  res.status(200).json({
    success: true,
    warden,
  });
});

// Update Warden
const updateWarden = asyncHandler(async (req, res) => {
  const warden = await Warden.findById(req.params.id);

  if (!warden) {
    res.status(404);
    throw new Error("Warden not found");
  }

  // Prevent duplicate email
  if (req.body.email && req.body.email !== warden.email) {
    const emailExists = await Warden.findOne({ email: req.body.email });

    if (emailExists) {
      res.status(400);
      throw new Error("Email already in use");
    }
  }

  const updatedWarden = await Warden.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    message: "Warden updated successfully",
    warden: updatedWarden,
  });
});

// Delete Warden
const deleteWarden = asyncHandler(async (req, res) => {
  const warden = await Warden.findByIdAndDelete(req.params.id);

  if (!warden) {
    res.status(404);
    throw new Error("Warden not found");
  }

  res.status(200).json({
    success: true,
    message: "Warden deleted successfully",
  });
});

module.exports = {
  createWarden,
  getWardens,
  getWardenById,
  updateWarden,
  deleteWarden,
};