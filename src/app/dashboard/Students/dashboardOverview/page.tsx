"use client";

import LearningProgress from "@/src/components/dashboard/student/overview/LearningProgress";
import NextSessionCard from "@/src/components/dashboard/student/overview/NextSessionCard";
import Header from "@/src/components/dashboard/student/overview/Header";
import QuickActions from "@/src/components/dashboard/student/overview/QuickActions";
import RecentBookings from "@/src/components/dashboard/student/overview/RecentBookings";
import StudentStats from "@/src/components/dashboard/student/overview/StudentStats";
import { useStudentDashboard } from "@/src/hooks/dashboard/useStudentDashboard";

export default function studentDashboard() {
const {data, isLoading} = useStudentDashboard();
  console.log("Current data from dashboard:", data); 

  return (
    <div className="space-y-8">
      {/* ====================Header========================== */}
      <Header />
      {/* ================= STATS ================= */}
      <StudentStats
        stats={data?.stats}
      />
      {/* ================= MAIN GRID ================= */}
      <NextSessionCard
        session={data?.nextSession}
      />
      {/* Recent Bookings */}
      <RecentBookings
        bookings={data?.recentBookings}
      />

      {/* Right Side */}
      <QuickActions />
      {/* learning in progress */}
      <LearningProgress completedSessions={18} totalSessions={30} />
    </div>
  );
}
