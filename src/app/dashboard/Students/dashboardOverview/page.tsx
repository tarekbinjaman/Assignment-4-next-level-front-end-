"use client";

import LatestReview from "@/src/components/dashboard/student/overview/LatestReview";
import LearningProgress from "@/src/components/dashboard/student/overview/LearningProgress";
import NextSessionCard from "@/src/components/dashboard/student/overview/NextSessionCard";
import Header from "@/src/components/dashboard/student/overview/Header";
import QuickActions from "@/src/components/dashboard/student/overview/QuickActions";
import RecentBookings from "@/src/components/dashboard/student/overview/RecentBookings";
import StudentOverview from "@/src/components/dashboard/student/overview/StudentOverview";
import StudentStats from "@/src/components/dashboard/student/overview/StudentStats";

export default function studentDashboard() {
  return (
    <div className="space-y-8">
      {/* ====================Header========================== */}
      <Header />
      {/* ================= STATS ================= */}
      <StudentStats
        stats={{
          upcomingSessions: 3,
          completedSessions: 18,
          totalSpent: 520,
          reviewsGiven: 12,
        }}
      />
      {/* ================= MAIN GRID ================= */}
      <NextSessionCard
        session={{
          tutorName: "Charles Babbage",
          category: "Programming",
          date: "20 July 2026",
          time: "6:00 PM",
          status: "Accepted",
        }}
      />
      {/* Recent Bookings */}
      <RecentBookings
        bookings={[
          {
            id: "1",
            tutorName: "Charles Babbage",
            category: "Programming",
            date: "20 Jul 2026",
            time: "6:00 PM",
            status: "ACCEPTED",
          },
          {
            id: "2",
            tutorName: "Andrew Ng",
            category: "Machine Learning",
            date: "18 Jul 2026",
            time: "8:00 PM",
            status: "PENDING",
          },
          {
            id: "3",
            tutorName: "Alan Turing",
            category: "Algorithms",
            date: "15 Jul 2026",
            time: "5:00 PM",
            status: "COMPLETED",
          },
        ]}
      />

      {/* Right Side */}
      <QuickActions />
      {/* learning in progress */}
      <LearningProgress completedSessions={18} totalSessions={30} />
    </div>
  );
}
