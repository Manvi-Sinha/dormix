import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createNotice, updateNotice } from "../../api/noticeApi";

const audiences = ["All", "Students", "Wardens"];

export default function AddNoticeModal({
  isOpen,
  onClose,
  onSuccess,
  editingNotice,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    audience: "All",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingNotice) {
      setFormData({
        title: editingNotice.title || "",
        description: editingNotice.description || "",
        audience: editingNotice.audience || "All",
      });
    } else {
      setFormData({
        title: "",
        description: "",
        audience: "All",
      });
    }
  }, [editingNotice, isOpen]);

  if (!isOpen) return null;

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

      const payload = {
        ...formData,
      };

      console.log("Payload:", payload);

      if (editingNotice) {
        await updateNotice(editingNotice._id, payload);
      } else {
        await createNotice(payload);
      }

      onSuccess();
      onClose();

      setFormData({
        title: "",
        description: "",
        audience: "All",
      });
    } catch (error) {
      console.error("Notice Error:", error);
      console.log("Backend Response:", error.response?.data);

      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Failed to save notice."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold mb-6">
          {editingNotice ? "Edit Notice" : "Add Notice"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium mb-2">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Audience
            </label>

            <select
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            >
              {audiences.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg border hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              {loading
                ? "Saving..."
                : editingNotice
                ? "Update Notice"
                : "Create Notice"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}