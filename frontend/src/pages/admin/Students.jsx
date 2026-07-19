import { useEffect, useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

import {
  getStudents,
  deleteStudent,
} from "../../api/studentApi";

import AddStudentModal from "../../components/admin/AddStudentModal";
import ViewStudentModal from "../../components/admin/ViewStudentModal";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [viewModal, setViewModal] = useState(false);
  const [viewStudent, setViewStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load students."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Failed to delete student."
      );
    }
  };

  const filteredStudents = students.filter((student) => {
    const roomNumber = student.room?.roomNumber || "";

    return (
      student.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      roomNumber
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.course
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80 text-lg font-semibold">
        Loading students...
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

      <AddStudentModal
        open={openModal}
        editStudent={selectedStudent}
        onClose={() => {
          setOpenModal(false);
          setSelectedStudent(null);
        }}
        onSuccess={fetchStudents}
      />

      <ViewStudentModal
        open={viewModal}
        student={viewStudent}
        onClose={() => {
          setViewModal(false);
          setViewStudent(null);
        }}
      />

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

        <button
          onClick={() => {
            setSelectedStudent(null);
            setOpenModal(true);
          }}
          className="flex items-center gap-2 bg-[#C8D9E6] hover:bg-blue-100 transition px-5 py-3 rounded-xl font-medium"
        >
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
                  key={student._id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-4 font-medium">
                    {student.name}
                  </td>

                  <td className="p-4">
                    {student.room?.roomNumber ||
                      "Not Assigned"}
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

                      <button
                        onClick={() => {
                          setViewStudent(student);
                          setViewModal(true);
                        }}
                        className="w-9 h-9 rounded-lg bg-[#C8D9E6] hover:bg-blue-100 flex items-center justify-center"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedStudent(student);
                          setOpenModal(true);
                        }}
                        className="w-9 h-9 rounded-lg bg-yellow-100 hover:bg-yellow-200 flex items-center justify-center text-yellow-700"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(student._id)
                        }
                        className="w-9 h-9 rounded-lg bg-red-100 hover:bg-red-200 flex items-center justify-center text-red-600"
                      >
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