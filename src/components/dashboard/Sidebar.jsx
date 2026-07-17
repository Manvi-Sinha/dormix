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
    <aside className="w-72 bg-white border-r shadow-sm min-h-screen flex flex-col">

      {/* Logo */}

      <div className="h-24 flex items-center justify-center border-b">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
            D
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Dormix
            </h1>

            <p className="text-xs text-gray-500">
              Student Portal
            </p>
          </div>
        </Link>

      </div>

      {/* Menu */}

      <nav className="flex-1 p-5">

        <ul className="space-y-2">

          {menuItems.map((item) => (
            <li key={item.name}>

              <Link
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                {item.name}

              </Link>

            </li>
          ))}

        </ul>

      </nav>

      {/* Logout */}

      <div className="border-t p-5">

        <button className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;