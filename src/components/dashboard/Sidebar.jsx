import {
  FaHome,
  FaBed,
  FaMoneyBillWave,
  FaClipboardList,
  FaBullhorn,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/student-dashboard",
    },
    {
      name: "Room",
      icon: <FaBed />,
      path: "/student-dashboard/room",
    },
    {
      name: "Fees",
      icon: <FaMoneyBillWave />,
      path: "/student-dashboard/fees",
    },
    {
      name: "Complaints",
      icon: <FaClipboardList />,
      path: "/student-dashboard/complaints",
    },
    {
      name: "Notices",
      icon: <FaBullhorn />,
      path: "/student-dashboard/notices",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      path: "/student-dashboard/profile",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-slate-200 flex flex-col">

      {/* Logo */}

      <div className="h-20 flex items-center px-6 border-b border-slate-200">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
            D
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              Dormix
            </h1>

            <p className="text-xs text-slate-500">
              Student Portal
            </p>
          </div>
        </Link>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">

        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4 px-3">
          Main Menu
        </p>

        <ul className="space-y-2">

          {menuItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                  ${
                    active
                      ? "bg-[#C8D9E6] text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="text-base">
                    {item.icon}
                  </span>

                  {item.name}
                </Link>
              </li>
            );
          })}

        </ul>

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-200 p-4">

        <button className="w-full flex items-center justify-center gap-3 rounded-xl bg-red-500 hover:bg-red-600 text-white py-3 text-sm font-medium transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;