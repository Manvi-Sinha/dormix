function ViewStudentModal({ open, onClose, student }) {
  if (!open || !student) return null;

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
      <div className="bg-white rounded-2xl w-full max-w-3xl p-6 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Student Details
          </h2>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Detail label="Name" value={student.name} />

          <Detail label="Email" value={student.email} />

          <Detail label="Phone" value={student.phone} />

          <Detail label="Gender" value={student.gender} />

          <Detail label="Course" value={student.course} />

          <Detail label="College" value={student.college} />

          <Detail
            label="Room"
            value={student.room?.roomNumber || "Not Assigned"}
          />

          <Detail label="Status" value={student.status} />

          <Detail
            label="Guardian Name"
            value={student.guardianName}
          />

          <Detail
            label="Guardian Phone"
            value={student.guardianPhone}
          />

          <div className="md:col-span-2">
            <p className="text-sm text-slate-500">
              Address
            </p>

            <p className="mt-1 font-medium text-slate-800">
              {student.address || "-"}
            </p>
          </div>

        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="bg-[#C8D9E6] hover:bg-blue-100 transition px-6 py-3 rounded-xl font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default ViewStudentModal;