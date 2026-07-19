import { useEffect, useState } from "react";
import {
  FaSearch,
  FaBullhorn,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

import {
  getNotices,
  deleteNotice,
} from "../../api/noticeApi";

import AddNoticeModal from "../../components/admin/AddNoticeModal";
import ViewNoticeModal from "../../components/admin/ViewNoticeModal";

function Notices() {
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const [selectedNotice, setSelectedNotice] = useState(null);
  const [editingNotice, setEditingNotice] = useState(null);

  const fetchNotices = async () => {
    try {
      const data = await getNotices();
      setNotices(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this notice?"
    );

    if (!confirmDelete) return;

    try {
      await deleteNotice(id);
      fetchNotices();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredNotices = notices.filter((notice) => {
    const searchText = search.toLowerCase();

    return (
      notice.title.toLowerCase().includes(searchText) ||
      notice.description.toLowerCase().includes(searchText) ||
      notice.audience.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="space-y-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Notice Management
          </h1>

          <p className="text-slate-500 mt-1">
            Publish and manage hostel notices.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingNotice(null);
            setShowAddModal(true);
          }}
          className="flex items-center gap-2 bg-[#C8D9E6] hover:bg-blue-100 transition px-5 py-3 rounded-xl font-medium"
        >
          <FaPlus />
          Publish Notice
        </button>

      </div>

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

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-slate-50">

              <tr>
                <th className="text-left p-4">
                  <div className="flex items-center gap-2">
                    <FaBullhorn />
                    Title
                  </div>
                </th>

                <th className="text-left p-4">
                  Audience
                </th>

                <th className="text-left p-4">
                  Created By
                </th>

                <th className="text-left p-4">
                  Published
                </th>

                <th className="text-center p-4">
                  Actions
                </th>
              </tr>

            </thead>

            <tbody>

              {filteredNotices.map((notice) => (
                <tr
                  key={notice._id}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="p-4 font-medium">
                    {notice.title}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        notice.audience === "Students"
                          ? "bg-green-100 text-green-700"
                          : notice.audience === "Wardens"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {notice.audience}
                    </span>

                  </td>

                  <td className="p-4">
                    {notice.createdBy?.name || "N/A"}
                  </td>

                  <td className="p-4">
                    {new Date(notice.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-2">
                                            <button
                        onClick={() => {
                          setSelectedNotice(notice);
                          setShowViewModal(true);
                        }}
                        className="w-9 h-9 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 flex items-center justify-center"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={() => {
                          setEditingNotice(notice);
                          setShowAddModal(true);
                        }}
                        className="w-9 h-9 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-700 flex items-center justify-center"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => handleDelete(notice._id)}
                        className="w-9 h-9 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center"
                      >
                        <FaTrash />
                      </button>
                    </div>

                  </td>

                </tr>
              ))}

              {filteredNotices.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
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

      <AddNoticeModal
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setEditingNotice(null);
        }}
        editingNotice={editingNotice}
        onSuccess={fetchNotices}
      />

      <ViewNoticeModal
        isOpen={showViewModal}
        onClose={() => {
          setShowViewModal(false);
          setSelectedNotice(null);
        }}
        notice={selectedNotice}
      />

    </div>
  );
}

export default Notices;