import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  createComplaint,
  updateComplaint,
} from "../../api/complaintApi";
import { getStudents } from "../../api/studentApi";

const categories = [
  "Electrical",
  "Plumbing",
  "Cleaning",
  "Furniture",
  "Other",
];

const statuses = [
  "Pending",
  "In Progress",
  "Resolved",
];

export default function AddComplaintModal({
  isOpen,
  onClose,
  onSuccess,
  complaint,
}) {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    student: "",
    title: "",
    description: "",
    category: "Other",
    status: "Pending",
  });

  useEffect(() => {
    if (!isOpen) return;

    fetchStudents();

    if (complaint) {
      setFormData({
        student: complaint.student?._id || "",
        title: complaint.title || "",
        description: complaint.description || "",
        category: complaint.category || "Other",
        status: complaint.status || "Pending",
      });
    } else {
      setFormData({
        student: "",
        title: "",
        description: "",
        category: "Other",
        status: "Pending",
      });
    }
  }, [isOpen, complaint]);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (complaint) {
        await updateComplaint(complaint._id, formData);
      } else {
        await createComplaint(formData);
      }

      onSuccess();
      onClose();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold mb-6">
          {complaint ? "Edit Complaint" : "Add Complaint"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">
              Student
            </label>

            <select
              name="student"
              value={formData.student}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            >
              <option value="">Select Student</option>

              {students.map((student) => (
                <option
                  key={student._id}
                  value={student._id}
                >
                  {student.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Complaint Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter complaint title"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Description
            </label>

            <textarea
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Describe the issue..."
              className="w-full border rounded-lg p-3 resize-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              {statuses.map((status) => (
                <option
                  key={status}
                  value={status}
                >
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#2C3E50] text-white hover:bg-[#1f2f3f]"
            >
              {complaint ? "Update Complaint" : "Add Complaint"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}