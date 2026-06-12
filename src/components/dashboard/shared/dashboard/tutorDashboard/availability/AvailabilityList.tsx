"use client";

import { Availability } from "@/src/types/availability";
import { useDeleteAvailability } from "@/src/hooks/availability/useDeleteAvailability";

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-3">
      {data.map((slot) => (
        <div
          key={slot.id}
          className="flex items-center justify-between border rounded-lg p-4"
        >
          <div>
            <h3 className="font-semibold">
              {slot.day}
            </h3>

            <p>
              {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
            </p>
          </div>

          <button
            disabled={isPending}
            onClick={() => handleDelete(slot.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}