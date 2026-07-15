import {
  FaBed,
  FaMoneyBillWave,
  FaClipboardList,
  FaUserFriends,
} from "react-icons/fa";

function Features() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="text-gray-400 mt-4">
            Manage every aspect of your Hostel/PG from one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <div className="bg-slate-900 rounded-2xl p-6 hover:-translate-y-2 hover:bg-slate-800 transition duration-300">
            <FaBed className="text-4xl text-blue-500 mb-5" />
            <h3 className="text-xl font-semibold">Room Booking</h3>
            <p className="text-gray-400 mt-3">
              Book and manage hostel rooms with ease.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 hover:-translate-y-2 hover:bg-slate-800 transition duration-300">
            <FaMoneyBillWave className="text-4xl text-blue-500 mb-5" />
            <h3 className="text-xl font-semibold">Fee Tracking</h3>
            <p className="text-gray-400 mt-3">
              Monitor payments, dues and receipts.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 hover:-translate-y-2 hover:bg-slate-800 transition duration-300">
            <FaClipboardList className="text-4xl text-blue-500 mb-5" />
            <h3 className="text-xl font-semibold">Complaints</h3>
            <p className="text-gray-400 mt-3">
              Track and resolve complaints efficiently.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 hover:-translate-y-2 hover:bg-slate-800 transition duration-300">
            <FaUserFriends className="text-4xl text-blue-500 mb-5" />
            <h3 className="text-xl font-semibold">Visitor Management</h3>
            <p className="text-gray-400 mt-3">
              Maintain secure visitor records and history.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;