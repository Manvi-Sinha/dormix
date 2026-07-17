import {
  FaMoneyBillWave,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

function FeeCard() {
  const totalFee = 60000;
  const paidFee = 55000;
  const remainingFee = totalFee - paidFee;

  const progress = (paidFee / totalFee) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

          <FaMoneyBillWave className="text-green-600 text-xl" />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Fee Details
          </h2>

          <p className="text-sm text-gray-500">
            Current semester payment status
          </p>

        </div>

      </div>

      {/* Amounts */}

      <div className="space-y-5">

        <div className="flex justify-between items-center">

          <span className="text-gray-600">
            Total Fee
          </span>

          <span className="font-bold text-lg">
            ₹60,000
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-gray-600">
            Paid
          </span>

          <span className="font-bold text-lg text-green-600">
            ₹55,000
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-gray-600">
            Remaining
          </span>

          <span className="font-bold text-lg text-red-500">
            ₹{remainingFee.toLocaleString()}
          </span>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between text-sm mb-2">

          <span className="text-gray-500">
            Payment Progress
          </span>

          <span className="font-semibold">
            {progress.toFixed(0)}%
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div
            className="bg-green-500 h-3 rounded-full"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <FaCalendarAlt className="text-blue-600" />

            <span className="text-gray-600">
              Due Date
            </span>

          </div>

          <span className="font-semibold">
            30 July 2026
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <FaCheckCircle className="text-green-600" />

            <span className="text-gray-600">
              Status
            </span>

          </div>

          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
            Partially Paid
          </span>

        </div>

      </div>

      {/* Button */}

      <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">

        View Payment History

      </button>

    </div>
  );
}

export default FeeCard;