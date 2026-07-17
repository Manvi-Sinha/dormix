import {
  FaBed,
  FaMoneyBillWave,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";

import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatCard from "../../components/dashboard/StatCard";
import RoomCard from "../../components/dashboard/RoomCard";
import FeeCard from "../../components/dashboard/FeeCard";
import NoticeCard from "../../components/dashboard/NoticeCard";

function DashboardHome() {
  return (
    <div className="space-y-8">

      {/* Welcome */}

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

    </div>
  );
}

export default DashboardHome;