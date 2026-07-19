import { useEffect, useState } from "react";
import {
  createStudent,
  updateStudent,
} from "../../api/studentApi";
import { getRooms } from "../../api/roomApi";

function AddStudentModal({
  open,
  onClose,
  onSuccess,
  editStudent = null,
}) {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    gender: "Male",
    room: "",
    course: "",
    college: "",
    guardianName: "",
    guardianPhone: "",
    address: "",
    status: "Active",
  };

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (open) {
      fetchRooms();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    if (editStudent) {
      setFormData({
        name: editStudent.name || "",
        email: editStudent.email || "",
        phone: editStudent.phone || "",
        gender: editStudent.gender || "Male",
        room: editStudent.room?._id || "",
        course: editStudent.course || "",
        college: editStudent.college || "",
        guardianName: editStudent.guardianName || "",
        guardianPhone: editStudent.guardianPhone || "",
        address: editStudent.address || "",
        status: editStudent.status || "Active",
      });
    } else {
      setFormData(initialForm);
    }
  }, [editStudent, open]);

  const fetchRooms = async () => {
    try {
      const data = await getRooms();

      setRooms(
        data.filter(
          (room) =>
            room.occupied < room.capacity ||
            room._id === editStudent?.room?._id
        )
      );
    } catch (err) {
      console.error(err);
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
      setLoading(true);

      if (editStudent) {
        await updateStudent(editStudent._id, formData);
      } else {
        await createStudent(formData);
      }

      onSuccess();
      onClose();
      setFormData(initialForm);
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Failed to save student."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl p-6 max-h-[90vh] overflow-y-auto">

        <h2 className="text-2xl font-bold mb-6">
          {editStudent ? "Edit Student" : "Add Student"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="college"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="guardianName"
            placeholder="Guardian Name"
            value={formData.guardianName}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="guardianPhone"
            placeholder="Guardian Phone"
            value={formData.guardianPhone}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <select
            name="room"
            value={formData.room}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          >
            <option value="">Select Room</option>

            {rooms.map((room) => (
              <option key={room._id} value={room._id}>
                {room.roomNumber}
              </option>
            ))}
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <textarea
            name="address"
            placeholder="Address"
            rows={3}
            value={formData.address}
            onChange={handleChange}
            className="border rounded-lg p-3 md:col-span-2"
          />

          <div className="md:col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 border rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#C8D9E6] hover:bg-blue-100 px-6 py-3 rounded-xl font-semibold transition disabled:opacity-60"
            >
              {loading
                ? "Saving..."
                : editStudent
                ? "Update Student"
                : "Add Student"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default AddStudentModal;