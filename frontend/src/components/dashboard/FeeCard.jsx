import {
  FaCalendarAlt,
  FaCheckCircle,
  FaMoneyBillWave,
  FaHistory,
} from "react-icons/fa";

function FeeCard() {
  const totalFee = 50000;
  const paidFee = 41500;
  const remainingFee = totalFee - paidFee;
  const progress = (paidFee / totalFee) * 100;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-300">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Fee Summary
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Current academic session
          </p>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
          <FaMoneyBillWave className="text-xl" />
        </div>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs text-slate-500">Total Fee</p>

          <h3 className="text-2xl font-semibold text-slate-800 mt-2">
            ₹{totalFee.toLocaleString("en-IN")}
          </h3>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs text-slate-500">Paid</p>

          <h3 className="text-2xl font-semibold text-green-600 mt-2">
            ₹{paidFee.toLocaleString("en-IN")}
          </h3>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs text-slate-500">Remaining</p>

          <h3 className="text-2xl font-semibold text-red-500 mt-2">
            ₹{remainingFee.toLocaleString("en-IN")}
          </h3>
        </div>

      </div>

      {/* Progress */}

      <div className="mb-8">

        <div className="flex justify-between text-sm text-slate-600 mb-3">
          <span>Payment Progress</span>
          <span className="font-medium">{progress.toFixed(0)}%</span>
        </div>

        <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-200 pt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaCalendarAlt />
          </div>

          <div>

            <p className="text-xs text-slate-500">
              Due Date
            </p>

            <h3 className="text-lg font-semibold text-slate-800">
              30 August 2025
            </h3>

          </div>

        </div>

        <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium w-fit">
          <FaCheckCircle />
          Partial Payment
        </span>

      </div>

      {/* Button */}

      <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3.5 text-sm font-semibold transition flex items-center justify-center gap-2">

        <FaHistory />

        View Payment History

      </button>

    </div>
  );
}

export default FeeCard;