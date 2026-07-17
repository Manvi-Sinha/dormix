import {
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaDownload,
  FaCalendarAlt,
} from "react-icons/fa";

function Fees() {
  const totalFee = 50000;
  const paidFee = 41500;
  const remainingFee = totalFee - paidFee;
  const progress = (paidFee / totalFee) * 100;

  const paymentHistory = [
    {
      id: 1,
      date: "12 Jul 2025",
      amount: "₹20,000",
      mode: "UPI",
      status: "Paid",
    },
    {
      id: 2,
      date: "10 Jan 2025",
      amount: "₹21,500",
      mode: "Net Banking",
      status: "Paid",
    },
    {
      id: 3,
      date: "30 Aug 2025",
      amount: "₹8,500",
      mode: "--",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <h1 className="text-2xl font-semibold text-slate-800">
          Fee Management
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          View your fee summary, payment history and upcoming dues.
        </p>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <SummaryCard
          title="Total Fee"
          value={`₹${totalFee.toLocaleString("en-IN")}`}
          color="text-slate-800"
          icon={<FaMoneyBillWave />}
        />

        <SummaryCard
          title="Paid"
          value={`₹${paidFee.toLocaleString("en-IN")}`}
          color="text-green-600"
          icon={<FaCheckCircle />}
        />

        <SummaryCard
          title="Remaining"
          value={`₹${remainingFee.toLocaleString("en-IN")}`}
          color="text-red-500"
          icon={<FaClock />}
        />

      </div>

      {/* Progress */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <div className="flex justify-between mb-3">

          <h2 className="text-lg font-semibold text-slate-800">
            Payment Progress
          </h2>

          <span className="text-sm font-medium text-slate-600">
            {progress.toFixed(0)}%
          </span>

        </div>

        <div className="h-3 bg-slate-200 rounded-full overflow-hidden">

          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${progress}%` }}
          />

        </div>

        <div className="mt-6 flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">

            <FaCalendarAlt />

          </div>

          <div>

            <p className="text-xs text-slate-500">
              Next Due Date
            </p>

            <h3 className="text-lg font-semibold text-slate-800">
              30 August 2025
            </h3>

          </div>

        </div>

      </div>

      {/* Payment History */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-6 border-b border-slate-200">

          <h2 className="text-lg font-semibold text-slate-800">
            Payment History
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="text-left text-sm font-semibold text-slate-700 px-6 py-4">
                  Date
                </th>

                <th className="text-left text-sm font-semibold text-slate-700 px-6 py-4">
                  Amount
                </th>

                <th className="text-left text-sm font-semibold text-slate-700 px-6 py-4">
                  Payment Mode
                </th>

                <th className="text-left text-sm font-semibold text-slate-700 px-6 py-4">
                  Status
                </th>

                <th className="text-center text-sm font-semibold text-slate-700 px-6 py-4">
                  Receipt
                </th>

              </tr>

            </thead>

            <tbody>

              {paymentHistory.map((payment) => (

                <tr
                  key={payment.id}
                  className="border-t border-slate-200 hover:bg-slate-50 transition"
                >

                  <td className="px-6 py-5 text-sm text-slate-700">
                    {payment.date}
                  </td>

                  <td className="px-6 py-5 font-semibold text-slate-800">
                    {payment.amount}
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">
                    {payment.mode}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        payment.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {payment.status}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-center">

                    {payment.status === "Paid" ? (

                      <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">

                        <FaDownload />

                        Receipt

                      </button>

                    ) : (

                      <span className="text-slate-400 text-sm">
                        —
                      </span>

                    )}

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

function SummaryCard({ title, value, color, icon }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className={`text-3xl font-semibold mt-2 ${color}`}>
            {value}
          </h2>

        </div>

        <div className="w-14 h-14 rounded-2xl bg-[#C8D9E6] flex items-center justify-center text-blue-700 text-xl">

          {icon}

        </div>

      </div>

    </div>
  );
}

export default Fees;