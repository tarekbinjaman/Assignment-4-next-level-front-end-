"use client";

import BookingInfoCard from "@/src/components/dashboard/tutor/singleSessionPage/BookingInfoCard";
import SessionActions from "@/src/components/dashboard/tutor/singleSessionPage/SessionActions";
import SessionHeader from "@/src/components/dashboard/tutor/singleSessionPage/SessionHeader";
import SessionInfoCard from "@/src/components/dashboard/tutor/singleSessionPage/SessionInfoCard";
import StudentCard from "@/src/components/dashboard/tutor/singleSessionPage/StudentCard";
import { useTutorSessionDetails } from "@/src/hooks/dashboard/useTutorSessionDetails ";
import { useParams } from "next/navigation";

// import { useTutorSessionDetails } from "@/src/hooks/dashboard/useTutorDashboard";

// import SessionHeader from "./components/SessionHeader";
// import StudentCard from "./components/StudentCard";
// import SessionInfoCard from "./components/SessionInfoCard";
// import BookingInfoCard from "./components/BookingInfoCard";
// import SessionActions from "./components/SessionActions";

export default function SessionDetailsPage() {
  const { id } = useParams();

  const { data, isLoading } = useTutorSessionDetails(id as string);

  if (isLoading) return <p>Loading...</p>;

  if (!data) return <p>Session not found.</p>;

  return (
    <div className="space-y-6">

      <SessionHeader status={data.session.status} />

      <div className="grid gap-6 lg:grid-cols-2">
        <StudentCard student={data.student} />
        <SessionInfoCard session={data.session} />
      </div>

      <BookingInfoCard booking={data.booking} />

      <SessionActions
        bookingId={data.id}
        status={data.session.status}
      />

    </div>
  );
}