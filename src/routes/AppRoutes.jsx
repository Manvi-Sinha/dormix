import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import StudentLogin from "../pages/StudentLogin";
import AdminLogin from "../pages/AdminLogin";
import StudentDashboard from "../pages/StudentDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/NotFound";

import DashboardHome from "../pages/student/DashboardHome";
import Room from "../pages/student/Room";
import Fees from "../pages/student/Fees";
import Complaints from "../pages/student/Complaints";
import Notices from "../pages/student/Notices";
import Profile from "../pages/student/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Landing Page */}

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

          <Route
            index
            element={<DashboardHome />}
          />

          <Route
            path="room"
            element={<Room />}
          />

          <Route
            path="fees"
            element={<Fees />}
          />

          <Route
            path="complaints"
            element={<Complaints />}
          />

          <Route
            path="notices"
            element={<Notices />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

        </Route>

        {/* Admin Dashboard */}

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

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