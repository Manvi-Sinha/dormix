import {
  FaChartPie,
  FaUsers,
  FaBed,
  FaMoneyBillWave,
  FaTools,
  FaBullhorn,
  FaUserTie,
  FaCog,
  FaSignOutAlt,
  FaBuilding,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function AdminSidebar({ closeSidebar }) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaChartPie />,
      path: "/admin-dashboard",
      end: true,
    },
    {
      name: "Students",
      icon: <FaUsers />,
      path: "/admin-dashboard/students",
    },
    {
      name: "Rooms",
      icon: <FaBed />,
      path: "/admin-dashboard/rooms",
    },
    {
      name: "Fees",
      icon: <FaMoneyBillWave />,
      path: "/admin-dashboard/fees",
    },
    {
      name: "Complaints",
      icon: <FaTools />,
      path: "/admin-dashboard/complaints",
    },
    {
      name: "Notices",
      icon: <FaBullhorn />,
      path: "/admin-dashboard/notices",
    },
    {
      name: "Wardens",
      icon: <FaUserTie />,
      path: "/admin-dashboard/wardens",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/admin-dashboard/settings",
    },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col">

      {/* Logo */}

      <div className="h-20 flex items-center gap-3 px-6 border-b border-slate-200">

        <div className="w-11 h-11 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">

          <FaBuilding />

        </div>

        <div>

          <h2 className="font-bold text-slate-800">
            Dormix
          </h2>

          <p className="text-xs text-slate-500">
            Admin Panel
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            end={item.end}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-[#C8D9E6] text-blue-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >

            <span className="text-lg">
              {item.icon}
            </span>

            <span className="text-sm">
              {item.name}
            </span>

          </NavLink>

        ))}

      </nav>

      {/* Footer */}

      <div className="p-4 border-t border-slate-200">

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition">

          <FaSignOutAlt />

          <span className="text-sm font-medium">
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}

export default AdminSidebar;