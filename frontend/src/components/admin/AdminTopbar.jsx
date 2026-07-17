import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";

function AdminTopbar() {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-6 py-4">

      <div className="flex items-center justify-between gap-6">

        {/* Left */}

        <div>

          <h1 className="text-xl font-semibold text-slate-800">
            Admin Panel
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Manage your hostel efficiently.
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="hidden md:flex items-center gap-3 bg-slate-100 rounded-xl px-4 py-2 w-80">

            <FaSearch className="text-slate-400" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />

          </div>

          {/* Notifications */}

          <button className="relative w-11 h-11 rounded-xl bg-slate-100 hover:bg-[#C8D9E6] transition flex items-center justify-center">

            <FaBell className="text-slate-600" />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />

          </button>

          {/* Profile */}

          <button className="flex items-center gap-3 hover:bg-slate-100 rounded-xl px-3 py-2 transition">

            <div className="w-11 h-11 rounded-full bg-[#C8D9E6] flex items-center justify-center text-blue-700 text-xl">

              <FaUserCircle />

            </div>

            <div className="hidden lg:block text-left">

              <p className="text-sm font-semibold text-slate-800">
                Admin
              </p>

              <p className="text-xs text-slate-500">
                Super Admin
              </p>

            </div>

            <FaChevronDown className="hidden lg:block text-slate-400 text-sm" />

          </button>

        </div>

      </div>

    </header>
  );
}

export default AdminTopbar;