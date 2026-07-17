import {
  FaUsers,
  FaBed,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Students",
    value: "248",
    icon: <FaUsers />,
    change: "+12",
    positive: true,
  },
  {
    title: "Occupied Rooms",
    value: "96",
    icon: <FaBed />,
    change: "+4",
    positive: true,
  },
  {
    title: "Monthly Revenue",
    value: "₹4.8L",
    icon: <FaMoneyBillWave />,
    change: "+8%",
    positive: true,
  },
  {
    title: "Pending Complaints",
    value: "17",
    icon: <FaExclamationTriangle />,
    change: "-3",
    positive: false,
  },
];

const payments = [
  {
    student: "Rahul Sharma",
    room: "A-203",
    amount: "₹8,500",
    status: "Paid",
  },
  {
    student: "Anjali Verma",
    room: "B-110",
    amount: "₹8,500",
    status: "Pending",
  },
  {
    student: "Rohit Singh",
    room: "C-102",
    amount: "₹8,500",
    status: "Paid",
  },
  {
    student: "Priya Gupta",
    room: "A-108",
    amount: "₹8,500",
    status: "Pending",
  },
];

function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back! Here's an overview of your hostel.
        </p>
      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200"
          >
            <div className="flex justify-between items-center">
              <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700 text-xl">
                {item.icon}
              </div>

              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  item.positive
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {item.positive ? (
                  <FaArrowUp />
                ) : (
                  <FaArrowDown />
                )}

                {item.change}
              </div>
            </div>

            <h2 className="text-slate-500 text-sm mt-4">
              {item.title}
            </h2>

            <p className="text-3xl font-bold mt-2 text-slate-800">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Grid */}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Payments */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="p-5 border-b">
            <h2 className="font-semibold text-slate-800">
              Recent Payments
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4">Student</th>
                  <th className="text-left p-4">Room</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {payments.map((payment) => (
                  <tr
                    key={payment.student}
                    className="border-t"
                  >
                    <td className="p-4">
                      {payment.student}
                    </td>

                    <td className="p-4">
                      {payment.room}
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
          <h2 className="font-semibold text-slate-800 mb-5">
            Quick Actions
          </h2>

          <div className="space-y-3">
            <button className="w-full py-3 rounded-xl bg-[#C8D9E6] hover:bg-blue-100 transition font-medium">
              Add Student
            </button>

            <button className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition font-medium">
              Assign Room
            </button>

            <button className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition font-medium">
              Collect Fee
            </button>

            <button className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition font-medium">
              Publish Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;