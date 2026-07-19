import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import StudentLogin from "../pages/StudentLogin";
import AdminLogin from "../pages/AdminLogin";
import StudentDashboard from "../pages/StudentDashboard";
import AdminLayout from "../pages/AdminLayout";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";

/* Student Pages */

import DashboardHome from "../pages/student/DashboardHome";
import Room from "../pages/student/Room";
import Fees from "../pages/student/Fees";
import Complaints from "../pages/student/Complaints";
import Notices from "../pages/student/Notices";
import Profile from "../pages/student/Profile";

/* Admin Pages */

import AdminDashboardHome from "../pages/admin/DashboardHome";
import Students from "../pages/admin/Students";
import Rooms from "../pages/admin/Rooms";
import AdminFees from "../pages/admin/Fees";
import AdminComplaints from "../pages/admin/Complaints";
import AdminNotices from "../pages/admin/Notices";
import Wardens from "../pages/admin/Wardens";
import Settings from "../pages/admin/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing */}

        <Route path="/" element={<Home />} />

        {/* Login */}

        <Route
          path="/student-login"
          element={<StudentLogin />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* Student Dashboard */}

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        >
          <Route index element={<DashboardHome />} />
          <Route path="room" element={<Room />} />
          <Route path="fees" element={<Fees />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="notices" element={<Notices />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Protected Admin Dashboard */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboardHome />} />
          <Route path="students" element={<Students />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="fees" element={<AdminFees />} />
          <Route path="complaints" element={<AdminComplaints />} />
          <Route path="notices" element={<AdminNotices />} />
          <Route path="wardens" element={<Wardens />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;