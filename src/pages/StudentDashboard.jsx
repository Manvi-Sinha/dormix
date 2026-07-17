import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1 flex flex-col">

        {/* Topbar */}

        <Topbar />

        {/* Page Content */}

        <main className="flex-1 p-8 overflow-y-auto">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default StudentDashboard;