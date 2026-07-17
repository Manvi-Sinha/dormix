import {
  FaUsers,
  FaBed,
  FaMoneyBillWave,
  FaTools,
  FaBullhorn,
  FaUserPlus,
  FaClipboardList,
  FaPlusCircle,
} from "react-icons/fa";

function AdminDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "248",
      icon: <FaUsers />,
      color: "text-blue-700",
    },
    {
      title: "Occupied Rooms",
      value: "112 / 120",
      icon: <FaBed />,
      color: "text-green-700",
    },
    {
      title: "Monthly Revenue",
      value: "₹12.4L",
      icon: <FaMoneyBillWave />,
      color: "text-purple-700",
    },
    {
      title: "Open Complaints",
      value: "18",
      icon: <FaTools />,
      color: "text-red-600",
    },
  ];

  const complaints = [
    {
      room: "A-204",
      issue: "Water leakage",
      status: "Pending",
    },
    {
      room: "B-105",
      issue: "Wi-Fi Issue",
      status: "In Progress",
    },
    {
      room: "C-302",
      issue: "Fan Repair",
      status: "Resolved",
    },
  ];

  const payments = [
    {
      student: "Rahul Sharma",
      amount: "₹25,000",
      date: "18 Jul 2026",
    },
    {
      student: "Priya Singh",
      amount: "₹25,000",
      date: "17 Jul 2026",
    },
    {
      student: "Aditya Verma",
      amount: "₹25,000",
      date: "17 Jul 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 space-y-6">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <h1 className="text-3xl font-bold text-slate-800">
          Admin Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back. Here's an overview of your hostel.
        </p>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-semibold text-slate-800 mt-2">
                  {item.value}
                </h2>

              </div>

              <div className={`w-14 h-14 rounded-2xl bg-[#C8D9E6] flex items-center justify-center text-xl ${item.color}`}>
                {item.icon}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Recent Payments */}

        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm">

          <div className="p-6 border-b border-slate-200">

            <h2 className="text-lg font-semibold text-slate-800">
              Recent Payments
            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="text-left px-6 py-4 text-sm">Student</th>

                  <th className="text-left px-6 py-4 text-sm">Amount</th>

                  <th className="text-left px-6 py-4 text-sm">Date</th>

                </tr>

              </thead>

              <tbody>

                {payments.map((payment, index) => (

                  <tr
                    key={index}
                    className="border-t border-slate-200"
                  >

                    <td className="px-6 py-4">
                      {payment.student}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {payment.amount}
                    </td>

                    <td className="px-6 py-4">
                      {payment.date}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <QuickAction
              icon={<FaUserPlus />}
              title="Add Student"
            />

            <QuickAction
              icon={<FaPlusCircle />}
              title="Assign Room"
            />

            <QuickAction
              icon={<FaBullhorn />}
              title="Publish Notice"
            />

            <QuickAction
              icon={<FaClipboardList />}
              title="View Reports"
            />

          </div>

        </div>

      </div>

      {/* Complaints */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="p-6 border-b border-slate-200">

          <h2 className="text-lg font-semibold text-slate-800">
            Recent Complaints
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="text-left px-6 py-4 text-sm">
                  Room
                </th>

                <th className="text-left px-6 py-4 text-sm">
                  Issue
                </th>

                <th className="text-left px-6 py-4 text-sm">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {complaints.map((item, index) => (

                <tr
                  key={index}
                  className="border-t border-slate-200"
                >

                  <td className="px-6 py-4">
                    {item.room}
                  </td>

                  <td className="px-6 py-4">
                    {item.issue}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

function QuickAction({ icon, title }) {
  return (
    <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-[#C8D9E6] transition">

      <div className="w-11 h-11 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">

        {icon}

      </div>

      <span className="font-medium text-slate-700">
        {title}
      </span>

    </button>
  );
}

export default AdminDashboard;