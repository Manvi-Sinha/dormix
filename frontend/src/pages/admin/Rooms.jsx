import { useEffect, useState } from "react";
import {
  FaBed,
  FaUsers,
  FaCheckCircle,
  FaPlus,
  FaEdit,
  FaEye,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

import {
  getRooms,
  deleteRoom,
} from "../../api/roomApi";

import AddRoomModal from "../../components/admin/AddRoomModal";
import ViewRoomModal from "../../components/admin/ViewRoomModal";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [viewModal, setViewModal] = useState(false);
  const [viewRoom, setViewRoom] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const data = await getRooms();
      setRooms(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load rooms."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this room?"
  );

  if (!confirmDelete) return;

  try {
    await deleteRoom(id);
    fetchRooms();
  } catch (err) {
    alert(
      err.response?.data?.message ||
      "Failed to delete room."
    );
  }
};

  const filteredRooms = rooms.filter((room) => {
    return (
      room.roomNumber
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      room.type
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      room.block
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  const roomStats = [
    {
      title: "Total Rooms",
      value: rooms.length,
      icon: <FaBed />,
    },
    {
      title: "Occupied",
      value: rooms.filter((room) => room.occupied > 0).length,
      icon: <FaUsers />,
    },
    {
      title: "Available",
      value: rooms.filter(
        (room) => room.occupied < room.capacity
      ).length,
      icon: <FaCheckCircle />,
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80 text-lg font-semibold">
        Loading rooms...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 border border-red-300 rounded-xl p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <AddRoomModal
        open={openModal}
        editRoom={selectedRoom}
        onClose={() => {
          setOpenModal(false);
          setSelectedRoom(null);
        }}
        onSuccess={fetchRooms}
      />

      <ViewRoomModal
        open={viewModal}
        room={viewRoom}
        onClose={() => {
          setViewModal(false);
          setViewRoom(null);
        }}
      />

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

        <button
          onClick={() => {
            setSelectedRoom(null);
            setOpenModal(true);
          }}
          className="flex items-center gap-2 bg-[#C8D9E6] hover:bg-blue-100 transition px-5 py-3 rounded-xl font-medium"
        >
          <FaPlus />
          Add Room
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search rooms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C8D9E6]"
          />

        </div>

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
                <th className="text-left p-4">Block</th>
                <th className="text-left p-4">Floor</th>
                <th className="text-left p-4">Type</th>
                <th className="text-left p-4">Capacity</th>
                <th className="text-left p-4">Occupied</th>
                <th className="text-left p-4">Rent</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredRooms.map((room) => (
                <tr
                  key={room._id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-4 font-medium">
                    {room.roomNumber}
                  </td>

                  <td className="p-4">{room.block}</td>

                  <td className="p-4">{room.floor}</td>

                  <td className="p-4">{room.type}</td>

                  <td className="p-4">{room.capacity}</td>

                  <td className="p-4">{room.occupied}</td>

                  <td className="p-4">
                    ₹{room.monthlyRent}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        room.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : room.status === "Maintenance"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {room.status}
                    </span>
                  </td>

                  <td className="p-4">
  <div className="flex justify-center gap-2">

    <button
      onClick={() => {
        setViewRoom(room);
        setViewModal(true);
      }}
      className="w-9 h-9 rounded-lg bg-[#C8D9E6] hover:bg-blue-100 flex items-center justify-center"
    >
      <FaEye />
    </button>

    <button
      onClick={() => {
        setSelectedRoom(room);
        setOpenModal(true);
      }}
      className="w-9 h-9 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-700 flex items-center justify-center"
    >
      <FaEdit />
    </button>

    <button
      onClick={() => handleDelete(room._id)}
      className="w-9 h-9 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center"
    >
      <FaTrash />
    </button>

  </div>
</td>

                </tr>
              ))}

              {filteredRooms.length === 0 && (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center py-10 text-slate-500"
                  >
                    No rooms found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Rooms;