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

function Sidebar({ closeSidebar }) {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/student-dashboard",
      icon: <FaHome />,
    },
    {
      name: "Room",
      path: "/student-dashboard/room",
      icon: <FaBed />,
    },
    {
      name: "Fees",
      path: "/student-dashboard/fees",
      icon: <FaMoneyBillWave />,
    },
    {
      name: "Complaints",
      path: "/student-dashboard/complaints",
      icon: <FaClipboardList />,
    },
    {
      name: "Notices",
      path: "/student-dashboard/notices",
      icon: <FaBullhorn />,
    },
    {
      name: "Profile",
      path: "/student-dashboard/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <aside className="w-72 h-screen bg-white border-r border-slate-200 flex flex-col shadow-sm">

      {/* Logo */}

      <div className="h-20 flex items-center px-6 border-b border-slate-200">

        <Link
          to="/"
          onClick={closeSidebar}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#C8D9E6] flex items-center justify-center text-xl font-bold text-blue-700">
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

      {/* Menu */}

      <nav className="flex-1 px-4 py-6">

        <p className="text-xs uppercase tracking-widest text-slate-400 mb-4 px-3">
          Main Menu
        </p>

        <div className="space-y-2">

          {menuItems.map((item) => {
            const active =
              location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium
                  ${
                    active
                      ? "bg-[#C8D9E6] text-slate-900"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
              >
                <span className="text-base">
                  {item.icon}
                </span>

                {item.name}
              </Link>
            );
          })}

        </div>

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-200 p-4">

        <button className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 text-sm font-medium transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;