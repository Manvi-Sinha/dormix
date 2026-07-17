import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Topbar() {
  return (
    <header className="h-24 bg-white border-b px-8 flex items-center justify-between">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Student Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back! Here's what's happening today.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Search */}

        <div className="relative hidden md:block">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 border rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Notification */}

        <button className="relative w-12 h-12 rounded-xl bg-slate-100 hover:bg-blue-50 flex items-center justify-center transition">

          <FaBell className="text-xl text-slate-700" />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-5xl text-blue-600" />

          <div className="hidden md:block">

            <h3 className="font-semibold text-slate-800">
              Manvi Sinha
            </h3>

            <p className="text-sm text-gray-500">
              Student
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;