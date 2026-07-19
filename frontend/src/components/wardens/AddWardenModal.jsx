import { useEffect, useState } from "react";
import {
  createWarden,
  updateWarden,
} from "../../api/wardenApi";

function AddWardenModal({
  open,
  onClose,
  onSuccess,
  editWarden = null,
}) {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    gender: "Male",
    block: "",
    address: "",
    joiningDate: "",
    status: "Active",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (!open) return;

    if (editWarden) {
      setFormData({
        name: editWarden.name || "",
        email: editWarden.email || "",
        phone: editWarden.phone || "",
        gender: editWarden.gender || "Male",
        block: editWarden.block || "",
        address: editWarden.address || "",
        joiningDate: editWarden.joiningDate
          ? new Date(editWarden.joiningDate)
              .toISOString()
              .split("T")[0]
          : "",
        status: editWarden.status || "Active",
      });
    } else {
      setFormData(initialForm);
    }
  }, [editWarden, open]);

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

      if (editWarden) {
        await updateWarden(editWarden._id, formData);
      } else {
        await createWarden(formData);
      }

      onSuccess();
      onClose();
      setFormData(initialForm);
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Failed to save warden."
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
          {editWarden ? "Edit Warden" : "Add Warden"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Warden Name"
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
            name="block"
            placeholder="Assigned Block"
            value={formData.block}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div></div>

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
                : editWarden
                ? "Update Warden"
                : "Add Warden"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default AddWardenModal;