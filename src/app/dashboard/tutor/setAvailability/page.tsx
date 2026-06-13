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

  const tutorId = "YOUR_TUTOR_PROFILE_ID";

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white border rounded-2xl p-6">
          <p className="text-gray-500">
            Loading availability...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <p className="text-red-600">
            Failed to load availability.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Availability
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your weekly teaching schedule.
        </p>
      </div>

      {/* Layout */}
      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        {/* Form */}
        <AvailabilityForm tutorId={tutorId} />

        {/* Schedule */}
        <div className="bg-white border rounded-2xl p-6 max-h-[430px] flex flex-col ">
          <h2 className="text-xl font-semibold mb-4">
            Your Schedule
          </h2>

          <div className="flex-1 overflow-y-auto hide-scrollbar">
            {availability.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500">
                    No availability found.
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Add your first available time slot.
                  </p>
                </div>
              </div>
            ) : (
              <AvailabilityList data={availability} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}