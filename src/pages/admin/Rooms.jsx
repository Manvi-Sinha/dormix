import {
  FaBed,
  FaUsers,
  FaCheckCircle,
  FaPlus,
  FaEdit,
} from "react-icons/fa";

const roomStats = [
  {
    title: "Total Rooms",
    value: 120,
    icon: <FaBed />,
  },
  {
    title: "Occupied",
    value: 96,
    icon: <FaUsers />,
  },
  {
    title: "Available",
    value: 24,
    icon: <FaCheckCircle />,
  },
];

const rooms = [
  {
    id: 1,
    room: "A-101",
    type: "Single",
    capacity: 1,
    occupied: 1,
    status: "Occupied",
  },
  {
    id: 2,
    room: "A-102",
    type: "Double",
    capacity: 2,
    occupied: 1,
    status: "Available",
  },
  {
    id: 3,
    room: "B-201",
    type: "Triple",
    capacity: 3,
    occupied: 3,
    status: "Occupied",
  },
  {
    id: 4,
    room: "C-104",
    type: "Double",
    capacity: 2,
    occupied: 2,
    status: "Occupied",
  },
];

function Rooms() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Room Management
          </h1>

          <p className="text-slate-500 mt-1">
            Manage hostel rooms and occupancy.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#C8D9E6] hover:bg-blue-100 transition px-5 py-3 rounded-xl font-medium">
          <FaPlus />
          Add Room
        </button>
      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-5">
        {roomStats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700 text-xl">
              {item.icon}
            </div>

            <h3 className="text-slate-500 mt-4">
              {item.title}
            </h3>

            <p className="text-3xl font-bold mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-4">Room</th>
                <th className="text-left p-4">Type</th>
                <th className="text-left p-4">Capacity</th>
                <th className="text-left p-4">Occupied</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {rooms.map((room) => (
                <tr
                  key={room.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {room.room}
                  </td>

                  <td className="p-4">
                    {room.type}
                  </td>

                  <td className="p-4">
                    {room.capacity}
                  </td>

                  <td className="p-4">
                    {room.occupied}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        room.status === "Occupied"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {room.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button className="w-9 h-9 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-700 inline-flex items-center justify-center">
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Rooms;