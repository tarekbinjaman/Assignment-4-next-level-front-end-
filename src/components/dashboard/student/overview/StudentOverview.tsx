"use client";

import StudentStats from "./StudentStats";
import NextSessionCard from "./NextSessionCard";
import RecentBookings from "./RecentBookings";
import QuickActions from "./QuickActions";
import LearningProgress from "./LearningProgress";
import LatestReview from "./LatestReview";

export default function StudentOverview() {
  return (
    <div className="space-y-8">
      {/* ================= Header ================= */}

      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Here is an overview of your learning journey.
        </p>
      </div>

      {/* ================= Stats ================= */}

      <StudentStats
        stats={{
          upcomingSessions: 3,
          completedSessions: 18,
          totalSpent: 540,
          reviewsGiven: 12,
        }}
      />

      {/* ================= Main Layout ================= */}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Section */}

        <div className="space-y-6 lg:col-span-2">
          <NextSessionCard
            session={{
              tutorName: "Charles Babbage",
              category: "Programming",
              date: "20 July 2026",
              time: "6:00 PM",
              status: "ACCEPTED",
            }}
          />

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
        </div>

        {/* Right Section */}

        <div className="space-y-6">
          <QuickActions />

          <LearningProgress
            completedSessions={18}
            totalSessions={30}
          />

          <LatestReview
            review={{
              tutorName: "Charles Babbage",
              rating: 5,
              comment:
                "Excellent tutor! Explained everything clearly and patiently.",
              createdAt: "15 July 2026",
            }}
          />
        </div>
      </div>
    </div>
  );
}