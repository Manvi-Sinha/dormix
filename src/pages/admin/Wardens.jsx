import { useState } from "react";
import {
  FaUserTie,
  FaPlus,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const wardens = [
  {
    id: 1,
    name: "Mr. Rajesh Kumar",
    hostel: "Block A",
    phone: "9876543210",
    email: "rajesh@dormix.com",
  },
  {
    id: 2,
    name: "Mrs. Anita Sharma",
    hostel: "Block B",
    phone: "9876501234",
    email: "anita@dormix.com",
  },
  {
    id: 3,
    name: "Mr. Vivek Singh",
    hostel: "Block C",
    phone: "9988776655",
    email: "vivek@dormix.com",
  },
  {
    id: 4,
    name: "Mrs. Neha Verma",
    hostel: "Girls Hostel",
    phone: "9123456789",
    email: "neha@dormix.com",
  },
];

function Wardens() {
  const [search, setSearch] = useState("");

  const filteredWardens = wardens.filter(
    (warden) =>
      warden.name.toLowerCase().includes(search.toLowerCase()) ||
      warden.hostel.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Wardens
          </h1>

          <p className="text-slate-500 mt-1">
            Manage hostel wardens.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#C8D9E6] hover:bg-blue-100 px-5 py-3 rounded-xl font-medium transition">
          <FaPlus />
          Add Warden
        </button>
      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
        <div className="relative max-w-md">
          <FaSearch className="absolute left-4 top-4 text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search wardens..."
            className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8D9E6]"
          />
        </div>
      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-2 gap-5">
        {filteredWardens.map((warden) => (
          <div
            key={warden.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700 text-xl">
                  <FaUserTie />
                </div>

                <div>
                  <h2 className="font-semibold text-lg text-slate-800">
                    {warden.name}
                  </h2>

                  <p className="text-slate-500">
                    {warden.hostel}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="w-9 h-9 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-700 flex items-center justify-center">
                  <FaEdit />
                </button>

                <button className="w-9 h-9 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center">
                  <FaTrash />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-600">
                <FaPhone />
                {warden.phone}
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <FaEnvelope />
                {warden.email}
              </div>
            </div>
          </div>
        ))}

        {filteredWardens.length === 0 && (
          <div className="col-span-full bg-white rounded-2xl p-10 text-center text-slate-500">
            No wardens found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Wardens;