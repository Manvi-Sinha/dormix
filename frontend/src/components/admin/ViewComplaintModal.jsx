import { X } from "lucide-react";

export default function ViewComplaintModal({
  isOpen,
  onClose,
  complaint,
}) {
  if (!isOpen || !complaint) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold mb-6">
          Complaint Details
        </h2>

        <div className="grid grid-cols-2 gap-5">

          <div>
            <p className="text-gray-500 text-sm">Student</p>
            <p className="font-semibold">
              {complaint.student?.name || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Room</p>
            <p className="font-semibold">
              {complaint.student?.room?.roomNumber || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Category</p>
            <p>{complaint.category}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Status</p>

            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                ${
                  complaint.status === "Resolved"
                    ? "bg-green-100 text-green-700"
                    : complaint.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
            >
              {complaint.status}
            </span>
          </div>

          <div className="col-span-2">
            <p className="text-gray-500 text-sm">Title</p>
            <p className="font-medium">{complaint.title}</p>
          </div>

          <div className="col-span-2">
            <p className="text-gray-500 text-sm">Description</p>
            <p className="whitespace-pre-line">
              {complaint.description}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Created On</p>
            <p>
              {new Date(complaint.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Last Updated</p>
            <p>
              {new Date(complaint.updatedAt).toLocaleDateString()}
            </p>
          </div>

        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#2C3E50] text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}