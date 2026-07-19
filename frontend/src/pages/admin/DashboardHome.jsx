import { useEffect, useState } from "react";

import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatCard from "../../components/dashboard/StatCard";
import RoomCard from "../../components/dashboard/RoomCard";
import FeeCard from "../../components/dashboard/FeeCard";
import NoticeCard from "../../components/dashboard/NoticeCard";

import {
  Users,
  BedDouble,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

import { getDashboardData } from "../../api/dashboardApi";

function DashboardHome() {
  const [dashboard, setDashboard] = useState({
    students: 0,
    rooms: 0,
    occupiedRooms: 0,
    wardens: 0,
    pendingComplaints: 0,
    feesCollected: 0,
    feesPending: 0,
    recentComplaints: [],
    recentNotices: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboardData();
      setDashboard(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
    if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-lg font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <WelcomeCard />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={dashboard.students}
          icon={Users}
        />

        <StatCard
          title="Total Rooms"
          value={dashboard.rooms}
          icon={BedDouble}
        />

        <StatCard
          title="Total Wardens"
          value={dashboard.wardens}
          icon={ShieldCheck}
        />

        <StatCard
          title="Pending Complaints"
          value={dashboard.pendingComplaints}
          icon={AlertTriangle}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RoomCard
          occupied={dashboard.occupiedRooms}
          total={dashboard.rooms}
        />

        <FeeCard
          collected={dashboard.feesCollected}
          pending={dashboard.feesPending}
        />
      </div>

      <NoticeCard
        notices={dashboard.recentNotices}
        complaints={dashboard.recentComplaints}
      />
    </div>
  );
}

export default DashboardHome;