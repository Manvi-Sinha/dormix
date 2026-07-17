import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminTopbar from "../components/admin/AdminTopbar";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Desktop Sidebar */}

      <div className="hidden lg:block">
        <AdminSidebar />
      </div>

      {/* Mobile Sidebar */}

      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="fixed top-0 left-0 z-50 lg:hidden">
            <AdminSidebar closeSidebar={() => setSidebarOpen(false)} />
          </div>
        </>
      )}

      {/* Main Content */}

      <div className="flex-1 flex flex-col min-w-0">

        {/* Mobile Header */}

        <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-4 flex items-center justify-between">

          <button
            onClick={() => setSidebarOpen(true)}
            className="text-slate-700 text-xl"
          >
            <FaBars />
          </button>

          <h1 className="font-semibold text-slate-800">
            Dormix Admin
          </h1>

          <div className="w-6" />

        </div>

        {/* Desktop Topbar */}

        <div className="hidden lg:block">
          <AdminTopbar />
        </div>

        {/* Page */}

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default AdminLayout;