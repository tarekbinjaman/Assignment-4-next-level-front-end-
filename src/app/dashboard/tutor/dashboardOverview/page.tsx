import NextSessionCard from "@/src/components/dashboard/tutor/overview/NextSessionCard";
import RecentSessions from "@/src/components/dashboard/tutor/overview/RecentSessions";
import Header from "@/src/components/dashboard/tutor/overview/TutorHeader";
import TutorStats from "@/src/components/dashboard/tutor/overview/TutorStats";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* =============Header============ */}
      <Header />
      {/* ===========stats============= */}
      <TutorStats
        stats={{
          upcomingSessions: 5,
          completedSessions: 42,
          totalStudents: 28,
          averageRating: 4.9,
        }}
      />
      {/* =============session card============= */}
      <NextSessionCard
        session={{
          studentName: "John Doe",
          category: "Web Development",
          date: "20 July 2026",
          time: "6:00 PM - 7:00 PM",
          duration: "1 Hour",
          status: "Accepted",
        }}
      />

      {/* ============Recent sesssion============= */}
      <RecentSessions
        sessions={[
          {
            id: "1",
            studentName: "John Doe",
            category: "Web Development",
            date: "20 Jul 2026",
            time: "6:00 PM",
            status: "ACCEPTED",
          },
          {
            id: "2",
            studentName: "Sarah Smith",
            category: "React",
            date: "18 Jul 2026",
            time: "4:00 PM",
            status: "COMPLETED",
          },
          {
            id: "3",
            studentName: "Alex Johnson",
            category: "Node.js",
            date: "16 Jul 2026",
            time: "8:00 PM",
            status: "PENDING",
          },
        ]}
      />
    </div>
  );
}
