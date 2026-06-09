"use client";

import AvailabilityForm from "@/src/components/dashboard/shared/dashboard/tutorDashboard/availability/AvailabilityForm";
import AvailabilityList from "@/src/components/dashboard/shared/dashboard/tutorDashboard/availability/AvailabilityList";
import { useMyAvailability } from "@/src/hooks/availability/useMyAvailability";

export default function AvailabilityPage() {
  const {
    data: availability = [],
    isLoading,
    error,
  } = useMyAvailability();

  const tutorId = "YOUR_TUTOR_PROFILE_ID"; // later replace with auth user

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-5">
        <p className="text-gray-500">Loading availability...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-5">
        <p className="text-red-500">
          Failed to load availability.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-5 space-y-6">
      {/* FORM */}
      <AvailabilityForm tutorId={tutorId} />

      {/* LIST */}
      {availability.length === 0 ? (
        <p className="text-gray-500 text-center">
          No availability found. Add your first slot.
        </p>
      ) : (
        <AvailabilityList data={availability} />
      )}
    </div>
  );
}