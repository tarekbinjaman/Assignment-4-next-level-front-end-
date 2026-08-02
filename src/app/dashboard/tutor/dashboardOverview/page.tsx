"use client";

// import  from "@/src/components/dashboard/tutor/overview/UpcomingSessions";
import RecentSessions from "@/src/components/dashboard/tutor/overview/RecentSessions";
import Header from "@/src/components/dashboard/tutor/overview/TutorHeader";
import TutorStats from "@/src/components/dashboard/tutor/overview/TutorStats";
import UpcomingSessions from "@/src/components/dashboard/tutor/overview/UpcomingSessions";
import { UseTutorDashboard } from "@/src/hooks/dashboard/useTutorDashboard";
import { useState } from "react";

export default function DashboardOverview() {
  const [nextPage, setNextPage] = useState(1);
  const limit = 5;
  const { data, isLoading } = UseTutorDashboard({ nextPage, nextLimit: limit });
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
          upcomingSessions: data?.stats?.upcomingSessions || 0,
          completedSession: data?.stats?.completedSession || 0,
          totalStudent: data?.stats?.totalStudent || 0,
          averageRatingResult: data?.stats?.averageRatingResult || 0,
        }}
      />
      {/* =============session card============= */}
      <UpcomingSessions
        sessions={data?.nextSession ?? []}
        pagination={data?.nextSessionPagination}
        onPageChange={setNextPage}
      />

      {/* ============Recent sesssion============= */}
      <RecentSessions sessions={data?.recentSessions ?? null} />
    </div>
  );
}
