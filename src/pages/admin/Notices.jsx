import { useState } from "react";
import {
  FaBullhorn,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const noticeData = [
  {
    id: 1,
    title: "Monthly Fee Reminder",
    category: "Fees",
    date: "15 Jul 2026",
  },
  {
    id: 2,
    title: "Hostel Maintenance",
    category: "Maintenance",
    date: "13 Jul 2026",
  },
  {
    id: 3,
    title: "Independence Day Celebration",
    category: "Event",
    date: "10 Jul 2026",
  },
  {
    id: 4,
    title: "Mess Menu Updated",
    category: "Mess",
    date: "08 Jul 2026",
  },
];

function Notices() {
  const [search, setSearch] = useState("");

  const filtered = noticeData.filter(
    (notice) =>
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Notice Management
          </h1>

          <p className="text-slate-500 mt-1">
            Publish and manage hostel notices.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#C8D9E6] hover:bg-blue-100 transition px-5 py-3 rounded-xl font-medium">
          <FaPlus />
          Publish Notice
        </button>
      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        <div className="relative max-w-md">
          <FaSearch className="absolute left-4 top-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search notices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C8D9E6]"
          />
        </div>
      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Category</th>
                <th className="text-left p-4">Published</th>
                <th className="text-center p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((notice) => (
                <tr
                  key={notice.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {notice.title}
                  </td>

                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full bg-[#C8D9E6] text-blue-700 text-xs font-medium">
                      {notice.category}
                    </span>
                  </td>

                  <td className="p-4">
                    {notice.date}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button className="w-9 h-9 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-700 flex items-center justify-center">
                        <FaEdit />
                      </button>

                      <button className="w-9 h-9 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-10 text-slate-500"
                  >
                    No notices found.
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

export default Notices;