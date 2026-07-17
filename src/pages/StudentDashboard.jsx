import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <div
        className={`
          fixed lg:static
          inset-y-0 left-0
          z-50
          transform
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }
          lg:translate-x-0
          transition-transform
          duration-300
        `}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}

      <div className="flex-1 flex flex-col min-w-0">

        {/* Mobile Header */}

        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 flex items-center justify-between">

          <button
            onClick={() => setSidebarOpen(true)}
            className="w-10 h-10 rounded-xl bg-[#C8D9E6] hover:bg-slate-200 transition flex items-center justify-center"
          >
            <FaBars className="text-slate-700" />
          </button>

          <h1 className="text-lg font-semibold text-slate-800">
            Dormix
          </h1>

          <div className="w-10" />

        </div>

        {/* Desktop Topbar */}

        <Topbar />

        {/* Main */}

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">

          <Outlet />

        </main>

      </div>
    </div>
  );
}

export default StudentDashboard;