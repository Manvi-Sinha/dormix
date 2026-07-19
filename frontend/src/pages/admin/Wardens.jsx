import { useEffect, useMemo, useState } from "react";
import {
  Eye,
  Pencil,
  Trash2,
  Plus,
  Search,
} from "lucide-react";

import {
  getWardens,
  deleteWarden,
} from "../../api/wardenApi";

import AddWardenModal from "../../components/wardens/AddWardenModal";
import ViewWardenModal from "../../components/wardens/ViewWardenModal";

function Wardens() {
  const [wardens, setWardens] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] =
    useState(false);

  const [showViewModal, setShowViewModal] =
    useState(false);

  const [selectedWarden, setSelectedWarden] =
    useState(null);

  const [editWarden, setEditWarden] =
    useState(null);

  useEffect(() => {
    fetchWardens();
  }, []);

  const fetchWardens = async () => {
    try {
      setLoading(true);
      const data = await getWardens();
      setWardens(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load wardens.");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (warden) => {
    setSelectedWarden(warden);
    setShowViewModal(true);
  };

  const handleEdit = (warden) => {
    setEditWarden(warden);
    setShowAddModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this warden?"
    );

    if (!confirmDelete) return;

    try {
      await deleteWarden(id);
      fetchWardens();
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Failed to delete warden."
      );
    }
  };

  const filteredWardens = useMemo(() => {
    return wardens.filter((warden) => {
      const keyword = search.toLowerCase();

      return (
        warden.name
          ?.toLowerCase()
          .includes(keyword) ||
        warden.email
          ?.toLowerCase()
          .includes(keyword) ||
        warden.phone
          ?.toLowerCase()
          .includes(keyword) ||
        warden.block
          ?.toLowerCase()
          .includes(keyword)
      );
    });
  }, [search, wardens]);

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };
    return (
    <>
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">
            Warden Management
          </h1>

          <button
            onClick={() => {
              setEditWarden(null);
              setShowAddModal(true);
            }}
            className="flex items-center gap-2 bg-[#C8D9E6] hover:bg-blue-100 px-5 py-3 rounded-xl font-semibold transition"
          >
            <Plus size={20} />
            Add Warden
          </button>
        </div>

        <div className="relative mb-6">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by name, email, phone or block..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-xl pl-11 pr-4 py-3"
          />
        </div>

        <div className="bg-white rounded-2xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Phone</th>
                <th className="text-left p-4">Block</th>
                <th className="text-left p-4">
                  Joining Date
                </th>
                <th className="text-left p-4">
                  Status
                </th>
                <th className="text-center p-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-10"
                  >
                    Loading...
                  </td>
                </tr>
              ) : filteredWardens.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-10"
                  >
                    No wardens found.
                  </td>
                </tr>
              ) : (
                filteredWardens.map((warden) => (
                  <tr
                    key={warden._id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {warden.name}
                    </td>

                    <td className="p-4">
                      {warden.email}
                    </td>

                    <td className="p-4">
                      {warden.phone}
                    </td>

                    <td className="p-4">
                      {warden.block}
                    </td>

                    <td className="p-4">
                      {formatDate(
                        warden.joiningDate
                      )}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          warden.status ===
                          "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {warden.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() =>
                            handleView(warden)
                          }
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Eye size={18} />
                        </button>

                        <button
                          onClick={() =>
                            handleEdit(warden)
                          }
                          className="text-yellow-600 hover:text-yellow-700"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              warden._id
                            )
                          }
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AddWardenModal
        open={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setEditWarden(null);
        }}
        onSuccess={fetchWardens}
        editWarden={editWarden}
      />

      <ViewWardenModal
        open={showViewModal}
        onClose={() => {
          setShowViewModal(false);
          setSelectedWarden(null);
        }}
        warden={selectedWarden}
      />
    </>
  );
}

export default Wardens;