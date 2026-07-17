import { useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

const studentData = [
  {
    id: 1,
    name: "Rahul Sharma",
    room: "A-203",
    phone: "9876543210",
    course: "B.Tech",
    status: "Active",
  },
  {
    id: 2,
    name: "Anjali Verma",
    room: "B-110",
    phone: "9123456780",
    course: "MBA",
    status: "Active",
  },
  {
    id: 3,
    name: "Rohit Singh",
    room: "C-102",
    phone: "9988776655",
    course: "BCA",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Priya Gupta",
    room: "A-108",
    phone: "9876512345",
    course: "MCA",
    status: "Active",
  },
  {
    id: 5,
    name: "Aman Yadav",
    room: "D-205",
    phone: "9012345678",
    course: "B.Com",
    status: "Active",
  },
];

function Students() {
  const [search, setSearch] = useState("");

  const filteredStudents = studentData.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.room.toLowerCase().includes(search.toLowerCase()) ||
      student.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Students
          </h1>

          <p className="text-slate-500 mt-1">
            Manage hostel students.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#C8D9E6] hover:bg-blue-100 transition px-5 py-3 rounded-xl font-medium">
          <FaPlus />
          Add Student
        </button>
      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C8D9E6]"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-slate-50">

              <tr>

                <th className="text-left p-4">Student</th>
                <th className="text-left p-4">Room</th>
                <th className="text-left p-4">Phone</th>
                <th className="text-left p-4">Course</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredStudents.map((student) => (

                <tr
                  key={student.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-4 font-medium">
                    {student.name}
                  </td>

                  <td className="p-4">
                    {student.room}
                  </td>

                  <td className="p-4">
                    {student.phone}
                  </td>

                  <td className="p-4">
                    {student.course}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {student.status}
                    </span>

                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-2">

                      <button className="w-9 h-9 rounded-lg bg-[#C8D9E6] hover:bg-blue-100 flex items-center justify-center">
                        <FaEye />
                      </button>

                      <button className="w-9 h-9 rounded-lg bg-yellow-100 hover:bg-yellow-200 flex items-center justify-center text-yellow-700">
                        <FaEdit />
                      </button>

                      <button className="w-9 h-9 rounded-lg bg-red-100 hover:bg-red-200 flex items-center justify-center text-red-600">
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-slate-500"
                  >
                    No students found.
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

export default Students;