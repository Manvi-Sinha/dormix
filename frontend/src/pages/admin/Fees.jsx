import { useEffect, useState } from "react";
import {
  FaSearch,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

import {
  getFees,
  deleteFee,
} from "../../api/feeApi";

import AddFeeModal from "../../components/admin/AddFeeModal";
import ViewFeeModal from "../../components/admin/ViewFeeModal";

function Fees() {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedFee, setSelectedFee] = useState(null);

  const [viewModal, setViewModal] = useState(false);
  const [viewFee, setViewFee] = useState(null);

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      setLoading(true);
      const data = await getFees();
      setFees(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load fees."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this fee?")) return;

    try {
      await deleteFee(id);
      fetchFees();
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Failed to delete fee."
      );
    }
  };

  const filteredFees = fees.filter((fee) => {
    const studentName = fee.student?.name || "";
    const roomNumber =
      fee.student?.room?.roomNumber || "";

    return (
      studentName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      roomNumber
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  const stats = [
    {
      title: "Collected",
      value: `₹${fees
        .filter((f) => f.status === "Paid")
        .reduce((sum, f) => sum + f.amount, 0)}`,
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Paid",
      value: fees.filter(
        (f) => f.status === "Paid"
      ).length,
      icon: <FaCheckCircle />,
    },
    {
      title: "Pending",
      value: fees.filter(
        (f) => f.status === "Pending"
      ).length,
      icon: <FaClock />,
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80">
        Loading fees...
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

      <AddFeeModal
        open={openModal}
        editFee={selectedFee}
        onClose={() => {
          setOpenModal(false);
          setSelectedFee(null);
        }}
        onSuccess={fetchFees}
      />

      <ViewFeeModal
  open={viewModal}
  fee={viewFee}
  onClose={() => {
    setViewModal(false);
    setViewFee(null);
  }}
/>

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Fee Management
          </h1>

          <p className="text-slate-500 mt-1">
            Track hostel fee payments.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedFee(null);
            setOpenModal(true);
          }}
          className="flex items-center gap-2 bg-[#C8D9E6] hover:bg-blue-100 px-5 py-3 rounded-xl"
        >
          <FaPlus />
          Add Fee
        </button>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-5">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700 text-xl">
              {item.icon}
            </div>

            <p className="text-slate-500 mt-4">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {item.value}
            </h2>
          </div>
        ))}

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search student or room..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
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
                <th className="text-left p-4">Student</th>
                <th className="text-left p-4">Room</th>
                <th className="text-left p-4">Month</th>
                <th className="text-left p-4">Amount</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
                            {filteredFees.map((fee) => (
                <tr
                  key={fee._id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {fee.student?.name || "-"}
                  </td>

                  <td className="p-4">
                    {fee.student?.room?.roomNumber || "-"}
                  </td>

                  <td className="p-4">
                    {fee.month}
                  </td>

                  <td className="p-4">
                    ₹{fee.amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        fee.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {fee.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-2">

                      <button
  onClick={() => {
    setViewFee(fee);
    setViewModal(true);
  }}
  className="w-9 h-9 rounded-lg bg-[#C8D9E6] hover:bg-blue-100 flex items-center justify-center"
>
  <FaEye />
</button>

                      <button
                        onClick={() => {
                          setSelectedFee(fee);
                          setOpenModal(true);
                        }}
                        className="w-9 h-9 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-700 flex items-center justify-center"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(fee._id)
                        }
                        className="w-9 h-9 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 flex items-center justify-center"
                      >
                        <FaTrash />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

              {filteredFees.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-slate-500"
                  >
                    No fee records found.
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

export default Fees;