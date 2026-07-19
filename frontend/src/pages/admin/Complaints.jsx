import { useEffect, useState } from "react";
import {
  FaSearch,
  FaTools,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

import {
  getComplaints,
  deleteComplaint,
} from "../../api/complaintApi";

import AddComplaintModal from "../../components/admin/AddComplaintModal";
import ViewComplaintModal from "../../components/admin/ViewComplaintModal";

function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const [viewModal, setViewModal] = useState(false);
  const [viewComplaint, setViewComplaint] = useState(null);

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const data = await getComplaints();
      setComplaints(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load complaints."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this complaint?")) return;

    try {
      await deleteComplaint(id);
      fetchComplaints();
    } catch (err) {
      alert(
        err.response?.data?.message || "Delete failed."
      );
    }
  };

  const filteredComplaints = complaints.filter((complaint) => {
    const text = search.toLowerCase();

    return (
      complaint.student?.name
        ?.toLowerCase()
        .includes(text) ||
      complaint.title
        ?.toLowerCase()
        .includes(text) ||
      complaint.category
        ?.toLowerCase()
        .includes(text) ||
      complaint.status
        ?.toLowerCase()
        .includes(text)
    );
  });

  const stats = {
    total: complaints.length,
    resolved: complaints.filter(
      (c) => c.status === "Resolved"
    ).length,
    pending: complaints.filter(
      (c) => c.status === "Pending"
    ).length,
  };

  if (loading) {
    return (
      <div className="py-10 text-center">
        Loading complaints...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Complaint Management
          </h1>

          <p className="text-slate-500 mt-1">
            Track and resolve hostel complaints.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedComplaint(null);
            setOpenModal(true);
          }}
          className="flex items-center gap-2 bg-[#2C3E50] text-white px-4 py-2 rounded-xl hover:bg-[#1f2f3f]"
        >
          <FaPlus />
          Add Complaint
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaTools />
          </div>

          <p className="text-slate-500 mt-4">
            Total Complaints
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {stats.total}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-green-700">
            <FaCheckCircle />
          </div>

          <p className="text-slate-500 mt-4">
            Resolved
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {stats.resolved}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-orange-600">
            <FaClock />
          </div>

          <p className="text-slate-500 mt-4">
            Pending
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {stats.pending}
          </h2>
        </div>

      </div>

      <div className="bg-white rounded-2xl p-5 border shadow-sm">

        <div className="flex justify-between items-center">

          <div className="relative max-w-md w-full">

            <FaSearch className="absolute left-4 top-4 text-slate-400" />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search complaints..."
              className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8D9E6]"
            />

          </div>

        </div>

      </div>

      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-slate-50">

              <tr>
                <th className="text-left p-4">Student</th>
                <th className="text-left p-4">Room</th>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">
                  Actions
                </th>
              </tr>

            </thead>

            <tbody>
                            {filteredComplaints.map((complaint) => (
                <tr
                  key={complaint._id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {complaint.student?.name || "-"}
                  </td>

                  <td className="p-4">
                    {complaint.student?.room?.roomNumber || "-"}
                  </td>

                  <td className="p-4">
                    {complaint.title}
                  </td>

                  <td className="p-4">
                    {new Date(
                      complaint.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        complaint.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : complaint.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() => {
                          setViewComplaint(complaint);
                          setViewModal(true);
                        }}
                        className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedComplaint(
                            complaint
                          );
                          setOpenModal(true);
                        }}
                        className="w-9 h-9 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 flex items-center justify-center"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(
                            complaint._id
                          )
                        }
                        className="w-9 h-9 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 flex items-center justify-center"
                      >
                        <FaTrash />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}

              {filteredComplaints.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-slate-500"
                  >
                    No complaints found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

      <AddComplaintModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedComplaint(null);
        }}
        onSuccess={fetchComplaints}
        complaint={selectedComplaint}
      />

      <ViewComplaintModal
        isOpen={viewModal}
        onClose={() => {
          setViewModal(false);
          setViewComplaint(null);
        }}
        complaint={viewComplaint}
      />

    </div>
  );
}

export default Complaints;