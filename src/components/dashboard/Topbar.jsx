import {
  FaBell,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

function Topbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">

      {/* Left */}

      <div>

        <h1 className="text-2xl font-semibold text-slate-800">
          Student Dashboard
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          {today}
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="hidden lg:block relative">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-slate-300 bg-slate-50 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:bg-white transition"
          />

        </div>

        {/* Notification */}

        <button className="relative w-11 h-11 rounded-xl bg-[#C8D9E6] hover:bg-slate-200 transition flex items-center justify-center">

          <FaBell className="text-slate-700" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50 transition">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            M
          </div>

          <div className="hidden md:block text-left">

            <h3 className="text-sm font-semibold text-slate-800">
              Manvi Sinha
            </h3>

            <p className="text-xs text-slate-500">
              Student
            </p>

          </div>

          <FaChevronDown className="text-xs text-slate-500 hidden md:block" />

        </button>

      </div>

    </header>
  );
}

export default Topbar;