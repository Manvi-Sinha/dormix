function ViewFeeModal({ open, onClose, fee }) {
  if (!open || !fee) return null;

  const Detail = ({ label, value }) => (
    <div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 font-medium text-slate-800">
        {value || "-"}
      </p>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Fee Details
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <Detail
            label="Student"
            value={fee.student?.name}
          />

          <Detail
            label="Room"
            value={fee.student?.room?.roomNumber}
          />

          <Detail
            label="Month"
            value={fee.month}
          />

          <Detail
            label="Amount"
            value={`₹${fee.amount}`}
          />

          <Detail
            label="Status"
            value={fee.status}
          />

          <Detail
            label="Due Date"
            value={
              fee.dueDate
                ? new Date(fee.dueDate).toLocaleDateString()
                : "-"
            }
          />

          <Detail
            label="Payment Date"
            value={
              fee.paymentDate
                ? new Date(
                    fee.paymentDate
                  ).toLocaleDateString()
                : "-"
            }
          />

          <Detail
            label="Created"
            value={
              fee.createdAt
                ? new Date(
                    fee.createdAt
                  ).toLocaleDateString()
                : "-"
            }
          />

        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="bg-[#C8D9E6] hover:bg-blue-100 px-6 py-3 rounded-xl"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default ViewFeeModal;