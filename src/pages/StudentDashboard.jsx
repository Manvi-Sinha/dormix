import {
  FaBed,
  FaMoneyBillWave,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatCard from "../components/dashboard/StatCard";
import RoomCard from "../components/dashboard/RoomCard";
import FeeCard from "../components/dashboard/FeeCard";
import NoticeCard from "../components/dashboard/NoticeCard";

function StudentDashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1">

        {/* Topbar */}

        <Topbar />

        {/* Dashboard Content */}

        <main className="p-8 space-y-8">

          {/* Welcome Card */}

          <WelcomeCard />

          {/* Statistics */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
              title="Room Number"
              value="A-204"
              icon={<FaBed />}
              color="bg-blue-600"
            />

            <StatCard
              title="Pending Fee"
              value="₹5,000"
              icon={<FaMoneyBillWave />}
              color="bg-green-600"
            />

            <StatCard
              title="Complaints"
              value="2"
              icon={<FaClipboardList />}
              color="bg-orange-500"
            />

            <StatCard
              title="Attendance"
              value="96%"
              icon={<FaChartLine />}
              color="bg-purple-600"
            />

          </div>

          {/* Room & Fee */}

          <div className="grid lg:grid-cols-2 gap-6">

            <RoomCard />

            <FeeCard />

          </div>

          {/* Notices */}

          <NoticeCard />

        </main>

      </div>

    </div>
  );
}

export default StudentDashboard;