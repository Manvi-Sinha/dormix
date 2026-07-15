import {
  FaUsers,
  FaBed,
  FaBuilding,
  FaClipboardList,
} from "react-icons/fa";

function DashboardPreview() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Dashboard
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Manage Everything From One Dashboard
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Track students, rooms, payments and complaints with an intuitive dashboard.
          </p>

        </div>

        {/* Dashboard Card */}

        <div className="mt-12 bg-slate-900 rounded-3xl p-8 shadow-2xl max-w-6xl mx-auto">

          {/* Top Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-slate-800 rounded-2xl p-6">
              <FaUsers className="text-blue-400 text-3xl" />
              <h3 className="text-white text-3xl font-bold mt-4">248</h3>
              <p className="text-slate-400 mt-2">Students</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <FaBed className="text-green-400 text-3xl" />
              <h3 className="text-white text-3xl font-bold mt-4">80</h3>
              <p className="text-slate-400 mt-2">Rooms</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <FaBuilding className="text-yellow-400 text-3xl" />
              <h3 className="text-white text-3xl font-bold mt-4">92%</h3>
              <p className="text-slate-400 mt-2">Occupancy</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <FaClipboardList className="text-red-400 text-3xl" />
              <h3 className="text-white text-3xl font-bold mt-4">7</h3>
              <p className="text-slate-400 mt-2">Complaints</p>
            </div>

          </div>

          {/* Table */}

          <div className="mt-10 bg-slate-800 rounded-2xl p-6">

            <h3 className="text-white text-2xl font-semibold mb-6">
              Recent Bookings
            </h3>

            <table className="w-full text-left">

              <thead className="text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="pb-3">Student</th>
                  <th className="pb-3">Room</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>

              <tbody className="text-white">

                <tr className="border-b border-slate-700">
                  <td className="py-4">Rahul Sharma</td>
                  <td>A-102</td>
                  <td className="text-green-400">Confirmed</td>
                </tr>

                <tr className="border-b border-slate-700">
                  <td className="py-4">Ananya Singh</td>
                  <td>B-205</td>
                  <td className="text-yellow-400">Pending</td>
                </tr>

                <tr>
                  <td className="py-4">Rohit Verma</td>
                  <td>C-110</td>
                  <td className="text-green-400">Confirmed</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;