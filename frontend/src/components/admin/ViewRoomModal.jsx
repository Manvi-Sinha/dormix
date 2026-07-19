function ViewRoomModal({ open, onClose, room }) {
  if (!open || !room) return null;

  const Detail = ({ label, value }) => (
    <div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 font-medium text-slate-800">
        {value ?? "-"}
      </p>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl p-6 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Room Details
          </h2>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Detail
            label="Room Number"
            value={room.roomNumber}
          />

          <Detail
            label="Block"
            value={room.block}
          />

          <Detail
            label="Floor"
            value={room.floor}
          />

          <Detail
            label="Room Type"
            value={room.type}
          />

          <Detail
            label="Capacity"
            value={room.capacity}
          />

          <Detail
            label="Occupied Beds"
            value={room.occupied}
          />

          <Detail
            label="Available Beds"
            value={room.capacity - room.occupied}
          />

          <Detail
            label="Monthly Rent"
            value={`₹${room.monthlyRent}`}
          />

          <Detail
            label="Status"
            value={room.status}
          />

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

export default ViewRoomModal;