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
    <div className="space-y-6">

      {/* Welcome */}

      <WelcomeCard />

      {/* Stats */}

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Room Number"
          value="A-204"
          icon={<FaBed />}
          color="#2563EB"
        />

        <StatCard
          title="Pending Fee"
          value="₹8,500"
          icon={<FaMoneyBillWave />}
          color="#16A34A"
        />

        <StatCard
          title="Complaints"
          value="2"
          icon={<FaClipboardList />}
          color="#F97316"
        />

        <StatCard
          title="Attendance"
          value="96%"
          icon={<FaChartLine />}
          color="#9333EA"
        />

      </section>

      {/* Room + Fee */}

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">

        <div className="h-full">
          <RoomCard />
        </div>

        <div className="h-full">
          <FeeCard />
        </div>

      </section>

      {/* Notices */}

      <section>

        <NoticeCard />

      </section>

    </div>
  );
}

export default DashboardHome;