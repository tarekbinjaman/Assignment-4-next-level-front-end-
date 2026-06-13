"use client";

import { Availability } from "@/src/types/availability";
import { useDeleteAvailability } from "@/src/hooks/availability/useDeleteAvailability";
import { toast } from "sonner";

export default function AvailabilityList({
  data,
}: {
  data: Availability[];
}) {
  const { mutateAsync: deleteSlot, isPending } =
    useDeleteAvailability();

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");

    return new Date(
      0,
      0,
      0,
      Number(hours),
      Number(minutes)
    ).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteSlot(id);
      toast.info("Schedule deleted", {
        position: "top-right",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-3">
      {data.map((slot) => (
        <div
          key={slot.id}
          className="flex items-center justify-between border border-gray-200 rounded-xl p-4 bg-white hover:bg-blue-50/40 hover:border-blue-200 transition group"
        >
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full mb-2">
              {slot.day}
            </span>

            <p className="font-medium text-gray-900">
              {formatTime(slot.startTime)} —{" "}
              {formatTime(slot.endTime)}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              Available time slot
            </p>
          </div>

          <button
            disabled={isPending}
            onClick={() => handleDelete(slot.id)}
            className="text-red-500 hover:text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}