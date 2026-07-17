import { useState } from "react";
import {
  FaSearch,
  FaTools,
  FaCheckCircle,
  FaClock,
  FaEye,
} from "react-icons/fa";

const complaints = [
  {
    id: 1,
    student: "Rahul Sharma",
    room: "A-203",
    issue: "Fan not working",
    date: "12 Jul 2026",
    status: "Pending",
  },
  {
    id: 2,
    student: "Anjali Verma",
    room: "B-110",
    issue: "Water leakage",
    date: "11 Jul 2026",
    status: "Resolved",
  },
  {
    id: 3,
    student: "Rohit Singh",
    room: "C-102",
    issue: "Wi-Fi issue",
    date: "10 Jul 2026",
    status: "In Progress",
  },
  {
    id: 4,
    student: "Priya Gupta",
    room: "A-108",
    issue: "Light not working",
    date: "09 Jul 2026",
    status: "Pending",
  },
];

function Complaints() {
  const [search, setSearch] = useState("");

  const filtered = complaints.filter(
    (item) =>
      item.student.toLowerCase().includes(search.toLowerCase()) ||
      item.issue.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Complaint Management
        </h1>

        <p className="text-slate-500 mt-1">
          Track and resolve hostel complaints.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaTools />
          </div>
          <p className="text-slate-500 mt-4">Total Complaints</p>
          <h2 className="text-3xl font-bold mt-2">17</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-green-700">
            <FaCheckCircle />
          </div>
          <p className="text-slate-500 mt-4">Resolved</p>
          <h2 className="text-3xl font-bold mt-2">9</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-orange-600">
            <FaClock />
          </div>
          <p className="text-slate-500 mt-4">Pending</p>
          <h2 className="text-3xl font-bold mt-2">8</h2>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border shadow-sm">
        <div className="relative max-w-md">
          <FaSearch className="absolute left-4 top-4 text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search complaints..."
            className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8D9E6]"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-4">Student</th>
                <th className="text-left p-4">Room</th>
                <th className="text-left p-4">Issue</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-t hover:bg-slate-50">
                  <td className="p-4 font-medium">{item.student}</td>
                  <td className="p-4">{item.room}</td>
                  <td className="p-4">{item.issue}</td>
                  <td className="p-4">{item.date}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : item.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button className="w-9 h-9 rounded-lg bg-[#C8D9E6] hover:bg-blue-100 inline-flex items-center justify-center">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-slate-500"
                  >
                    No complaints found.
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

export default Complaints;