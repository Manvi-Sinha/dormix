import {
  FaBed,
  FaBuilding,
  FaLayerGroup,
  FaUserTie,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";

function RoomCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Room Details
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Your current hostel allocation
          </p>
        </div>

        <span className="flex items-center gap-2 bg-green-100 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full">
          <FaCheckCircle className="text-[10px]" />
          Active
        </span>

      </div>

      {/* Details */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaBed />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Room Number
            </p>

            <h3 className="text-base font-semibold text-slate-800">
              A-204
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaBed />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Bed Number
            </p>

            <h3 className="text-base font-semibold text-slate-800">
              B-2
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaLayerGroup />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Floor
            </p>

            <h3 className="text-base font-semibold text-slate-800">
              Second Floor
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaBuilding />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Block
            </p>

            <h3 className="text-base font-semibold text-slate-800">
              Block A
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaUserTie />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Warden
            </p>

            <h3 className="text-base font-semibold text-slate-800">
              Mr. Rajesh Kumar
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaPhoneAlt />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Contact
            </p>

            <h3 className="text-base font-semibold text-slate-800">
              +91 98765 43210
            </h3>
          </div>
        </div>

      </div>

    </div>
  );
}

export default RoomCard;