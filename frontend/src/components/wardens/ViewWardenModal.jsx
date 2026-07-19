function ViewWardenModal({
  open,
  onClose,
  warden,
}) {
  if (!open || !warden) return null;

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Warden Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-semibold">{warden.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold">{warden.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold">{warden.phone}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-semibold">{warden.gender}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Block</p>
            <p className="font-semibold">{warden.block}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                warden.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {warden.status}
            </span>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Joining Date
            </p>
            <p className="font-semibold">
              {formatDate(warden.joiningDate)}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">
              Address
            </p>

            <p className="font-semibold whitespace-pre-wrap">
              {warden.address || "-"}
            </p>
          </div>

        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-[#C8D9E6] hover:bg-blue-100 font-semibold transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default ViewWardenModal;