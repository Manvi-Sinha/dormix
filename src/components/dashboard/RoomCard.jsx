import {
  FaBed,
  FaBuilding,
  FaDoorOpen,
  FaLayerGroup,
  FaUserTie,
  FaPhoneAlt,
} from "react-icons/fa";

function RoomCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">

          <FaBed className="text-blue-600 text-xl" />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Room Details
          </h2>

          <p className="text-gray-500 text-sm">
            Your allocated hostel room information
          </p>

        </div>

      </div>

      {/* Details */}

      <div className="grid md:grid-cols-2 gap-5">

        <div className="bg-slate-50 rounded-xl p-4">

          <div className="flex items-center gap-3">

            <FaDoorOpen className="text-blue-600" />

            <span className="text-gray-600">
              Room Number
            </span>

          </div>

          <h3 className="text-xl font-bold mt-2">
            A-204
          </h3>

        </div>

        <div className="bg-slate-50 rounded-xl p-4">

          <div className="flex items-center gap-3">

            <FaBed className="text-blue-600" />

            <span className="text-gray-600">
              Bed Number
            </span>

          </div>

          <h3 className="text-xl font-bold mt-2">
            B-02
          </h3>

        </div>

        <div className="bg-slate-50 rounded-xl p-4">

          <div className="flex items-center gap-3">

            <FaLayerGroup className="text-blue-600" />

            <span className="text-gray-600">
              Floor
            </span>

          </div>

          <h3 className="text-xl font-bold mt-2">
            Second Floor
          </h3>

        </div>

        <div className="bg-slate-50 rounded-xl p-4">

          <div className="flex items-center gap-3">

            <FaBuilding className="text-blue-600" />

            <span className="text-gray-600">
              Block
            </span>

          </div>

          <h3 className="text-xl font-bold mt-2">
            Block A
          </h3>

        </div>

        <div className="bg-slate-50 rounded-xl p-4">

          <div className="flex items-center gap-3">

            <FaUserTie className="text-blue-600" />

            <span className="text-gray-600">
              Warden
            </span>

          </div>

          <h3 className="text-xl font-bold mt-2">
            Mr. Rajesh Kumar
          </h3>

        </div>

        <div className="bg-slate-50 rounded-xl p-4">

          <div className="flex items-center gap-3">

            <FaPhoneAlt className="text-blue-600" />

            <span className="text-gray-600">
              Contact
            </span>

          </div>

          <h3 className="text-xl font-bold mt-2">
            +91 98765 43210
          </h3>

        </div>

      </div>

    </div>
  );
}

export default RoomCard;