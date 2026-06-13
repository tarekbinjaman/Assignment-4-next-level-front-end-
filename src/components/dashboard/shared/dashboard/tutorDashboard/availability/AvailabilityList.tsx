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
})
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-3">
      {data.map((slot) => (
        <div
          key={slot.id}
          className="flex items-center justify-between border rounded-xl p-4 hover:bg-gray-50 transition"
        >
          <div>
            <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full mb-2">
              {slot.day}
            </span>

            <p className="font-medium">
              {formatTime(slot.startTime)} —
              {" "}
              {formatTime(slot.endTime)}
            </p>
          </div>

          <button
            disabled={isPending}
            onClick={() =>
              handleDelete(slot.id)
            }
            className="text-red-500 hover:text-red-700 font-medium disabled:opacity-50"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}