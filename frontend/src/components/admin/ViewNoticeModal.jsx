import { X } from "lucide-react";

export default function ViewNoticeModal({
  isOpen,
  onClose,
  notice,
}) {
  if (!isOpen || !notice) return null;

  const badgeColor = {
    All: "bg-blue-100 text-blue-700",
    Students: "bg-green-100 text-green-700",
    Wardens: "bg-purple-100 text-purple-700",
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
          Notice Details
        </h2>

        <div className="space-y-5">

          <div>
            <p className="text-sm text-gray-500 font-medium">
              Title
            </p>

            <p className="text-lg font-semibold">
              {notice.title}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium">
              Description
            </p>

            <p className="whitespace-pre-line text-gray-700">
              {notice.description}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium mb-2">
              Audience
            </p>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                badgeColor[notice.audience]
              }`}
            >
              {notice.audience}
            </span>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium">
              Created By
            </p>

            <p>
              {notice.createdBy?.name || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium">
              Created At
            </p>

            <p>
              {new Date(notice.createdAt).toLocaleString()}
            </p>
          </div>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}