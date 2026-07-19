import { useEffect, useState } from "react";
import {
  createRoom,
  updateRoom,
} from "../../api/roomApi";

const initialForm = {
  roomNumber: "",
  block: "",
  floor: "",
  type: "Single",
  capacity: 1,
  monthlyRent: "",
  status: "Available",
};

const getCapacity = (type) => {
  switch (type) {
    case "Single":
      return 1;
    case "Double":
      return 2;
    case "Triple":
      return 3;
    case "Quad":
      return 4;
    default:
      return 1;
  }
};

function AddRoomModal({
  open,
  onClose,
  onSuccess,
  editRoom,
}) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editRoom) {
      setForm({
        roomNumber: editRoom.roomNumber || "",
        block: editRoom.block || "",
        floor: editRoom.floor || "",
        type: editRoom.type || "Single",
        capacity:
          editRoom.capacity ||
          getCapacity(editRoom.type),
        monthlyRent: editRoom.monthlyRent || "",
        status: editRoom.status || "Available",
      });
    } else {
      setForm(initialForm);
    }
  }, [editRoom, open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "type") {
      setForm((prev) => ({
        ...prev,
        type: value,
        capacity: getCapacity(value),
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]:
        e.target.type === "number"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (editRoom) {
        await updateRoom(editRoom._id, form);
      } else {
        await createRoom(form);
      }

      onSuccess();
      onClose();
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Failed to save room."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {editRoom ? "Edit Room" : "Add Room"}
          </h2>

          <button
            onClick={onClose}
            className="text-xl hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="roomNumber"
            placeholder="Room Number"
            value={form.roomNumber}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <input
            type="text"
            name="block"
            placeholder="Block"
            value={form.block}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <input
            type="number"
            name="floor"
            placeholder="Floor"
            value={form.floor}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Triple">Triple</option>
            <option value="Quad">Quad</option>
          </select>

          <input
            type="number"
            name="capacity"
            value={form.capacity}
            readOnly
            className="border rounded-xl p-3 bg-slate-100 cursor-not-allowed"
          />

          <input
            type="number"
            name="monthlyRent"
            placeholder="Monthly Rent"
            value={form.monthlyRent}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border rounded-xl p-3 md:col-span-2"
          >
            <option value="Available">Available</option>
            <option value="Full">Full</option>
            <option value="Maintenance">Maintenance</option>
          </select>

          <div className="md:col-span-2 flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#C8D9E6] hover:bg-blue-100 px-6 py-3 rounded-xl font-medium disabled:opacity-50"
            >
              {loading
                ? "Saving..."
                : editRoom
                ? "Update Room"
                : "Add Room"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default AddRoomModal;