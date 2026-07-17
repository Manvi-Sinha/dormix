import { useState } from "react";
import {
  FaSearch,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaEye,
} from "react-icons/fa";

const stats = [
  {
    title: "Collected",
    value: "₹4.8L",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Paid Students",
    value: "210",
    icon: <FaCheckCircle />,
  },
  {
    title: "Pending",
    value: "38",
    icon: <FaClock />,
  },
];

const payments = [
  {
    id: 1,
    student: "Rahul Sharma",
    room: "A-203",
    amount: "₹8,500",
    month: "July",
    status: "Paid",
  },
  {
    id: 2,
    student: "Anjali Verma",
    room: "B-110",
    amount: "₹8,500",
    month: "July",
    status: "Pending",
  },
  {
    id: 3,
    student: "Rohit Singh",
    room: "C-102",
    amount: "₹8,500",
    month: "July",
    status: "Paid",
  },
  {
    id: 4,
    student: "Priya Gupta",
    room: "A-108",
    amount: "₹8,500",
    month: "July",
    status: "Pending",
  },
];

function Fees() {
  const [search, setSearch] = useState("");

  const filteredPayments = payments.filter(
    (payment) =>
      payment.student.toLowerCase().includes(search.toLowerCase()) ||
      payment.room.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Fee Management
        </h1>

        <p className="text-slate-500 mt-1">
          Track hostel fee payments.
        </p>
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
            placeholder="Search student..."
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
                <th className="text-left p-4">Student</th>
                <th className="text-left p-4">Room</th>
                <th className="text-left p-4">Month</th>
                <th className="text-left p-4">Amount</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {payment.student}
                  </td>

                  <td className="p-4">
                    {payment.room}
                  </td>

                  <td className="p-4">
                    {payment.month}
                  </td>

                  <td className="p-4">
                    {payment.amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        payment.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button className="w-9 h-9 rounded-lg bg-[#C8D9E6] hover:bg-blue-100 flex items-center justify-center mx-auto">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredPayments.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-slate-500"
                  >
                    No payment records found.
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