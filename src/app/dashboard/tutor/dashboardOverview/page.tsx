"use client";

import NextSessionCard from "@/src/components/dashboard/tutor/overview/NextSessionCard";
import RecentSessions from "@/src/components/dashboard/tutor/overview/RecentSessions";
import Header from "@/src/components/dashboard/tutor/overview/TutorHeader";
import TutorStats from "@/src/components/dashboard/tutor/overview/TutorStats";
import { UseTutorDashboard } from "@/src/hooks/dashboard/useTutorDashboard";

export default function DashboardOverview() {
  const { data, isLoading } = UseTutorDashboard();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("Tuttor dashboard data from tutor dashboard overview", data);
  return (
    <div className="space-y-8">
      {/* =============Header============ */}
      <Header />
      {/* ===========stats============= */}
      <TutorStats
        stats={{
          upcomingSessions: data?.stasts?.upcomingSessions || 0,
          completedSession: data?.stasts?.completedSession || 0,
          totalStudent: data?.stasts?.totalStudent || 0,
          averageRatingResult: data?.stasts?.averageRatingResult || 0,
        }}
      />
      {/* =============session card============= */}
      <NextSessionCard
        session={data?.nextSession}
      />

      {/* ============Recent sesssion============= */}
      <RecentSessions sessions={data?.nextSession ?? null} />
    </div>
  );
}
