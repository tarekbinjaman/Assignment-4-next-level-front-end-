import NextSessionCard from "@/src/components/dashboard/tutor/overview/NextSessionCard";
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
      
    </div>
  );
}
