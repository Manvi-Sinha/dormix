const Student = require("../models/Student");
const Room = require("../models/Room");
const Warden = require("../models/Warden");
const Fee = require("../models/Fee");
const Complaint = require("../models/Complaint");
const Notice = require("../models/Notice");

exports.getAdminDashboard = async (req, res) => {
  try {
    const [
      students,
      rooms,
      wardens,
      pendingComplaints,
      feesCollected,
      feesPending,
      recentComplaints,
      recentNotices,
    ] = await Promise.all([
      Student.countDocuments(),
      Room.find(),
      Warden.countDocuments(),
      Complaint.countDocuments({ status: "Pending" }),
      Fee.aggregate([
        {
          $match: {
            status: "Paid",
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: "$amount" },
          },
        },
      ]),
      Fee.aggregate([
        {
          $match: {
            status: "Pending",
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: "$amount" },
          },
        },
      ]),
      Complaint.find()
        .sort({ createdAt: -1 })
        .limit(5),
      Notice.find()
        .sort({ createdAt: -1 })
        .limit(5),
    ]);

    const occupiedRooms = rooms.filter(
      (room) => room.occupied > 0
    ).length;

    res.json({
      students,
      rooms: rooms.length,
      occupiedRooms,
      wardens,
      pendingComplaints,
      feesCollected:
        feesCollected[0]?.total || 0,
      feesPending:
        feesPending[0]?.total || 0,
      recentComplaints,
      recentNotices,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Dashboard fetch failed",
    });
  }
};