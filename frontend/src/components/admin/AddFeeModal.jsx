import { useEffect, useState } from "react";
import { createFee, updateFee } from "../../api/feeApi";
import { getStudents } from "../../api/studentApi";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function AddFeeModal({
  open,
  onClose,
  onSuccess,
  editFee = null,
}) {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    student: "",
    month: "",
    amount: "",
    dueDate: "",
    status: "Pending",
    paymentDate: "",
  });

  useEffect(() => {
    if (open) loadStudents();
  }, [open]);

  useEffect(() => {
    if (editFee) {
      setFormData({
        student: editFee.student?._id || "",
        month: editFee.month || "",
        amount: editFee.amount || "",
        dueDate: editFee.dueDate
          ? editFee.dueDate.substring(0, 10)
          : "",
        status: editFee.status || "Pending",
        paymentDate: editFee.paymentDate
          ? editFee.paymentDate.substring(0, 10)
          : "",
      });
    } else {
      setFormData({
        student: "",
        month: "",
        amount: "",
        dueDate: "",
        status: "Pending",
        paymentDate: "",
      });
    }
  }, [editFee, open]);

  const loadStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        paymentDate:
          formData.status === "Paid"
            ? formData.paymentDate || new Date()
            : null,
      };

      if (editFee) {
        await updateFee(editFee._id, payload);
      } else {
        await createFee(payload);
      }

      onSuccess();
      onClose();
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Failed to save fee."
      );
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {editFee ? "Edit Fee" : "Add Fee"}
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Student
            </label>

            <select
              name="student"
              value={formData.student}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="">
                Select Student
              </option>

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
            <label className="block mb-2 font-medium">
              Month
            </label>

            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="">
                Select Month
              </option>

              {months.map((month) => (
                <option
                  key={month}
                  value={month}
                >
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Amount
            </label>

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Due Date
            </label>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option>Pending</option>
              <option>Paid</option>
            </select>
          </div>

          {formData.status === "Paid" && (
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">
                Payment Date
              </label>

              <input
                type="date"
                name="paymentDate"
                value={formData.paymentDate}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>
          )}

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
              className="px-6 py-3 rounded-xl bg-[#C8D9E6] hover:bg-blue-100"
            >
              {editFee ? "Update" : "Create"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddFeeModal;