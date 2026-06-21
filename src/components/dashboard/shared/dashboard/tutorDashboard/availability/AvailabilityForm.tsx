"use client";

import { useState } from "react";
import { useCreateAvailability } from "@/src/hooks/availability/useCreateAvailability";
import { useMyAvailability } from "@/src/hooks/availability/useMyAvailability";

const days = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

export default function AvailabilityForm() {
  const [day, setDay] = useState("MONDAY");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [message, setMessage] = useState("");

  const { data: availability = [] } = useMyAvailability();

  const { mutateAsync: createSlot, isPending } =
    useCreateAvailability();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setMessage("");

    // Empty field validation
    if(!startTime || !endTime) {
      setMessage("Please select both start time and end time.");
      return;
    }

    // End time must be later than start time
    if(startTime >= endTime) {
      setMessage("End time must be later than start time.");
      return;
    }

    const alreadyExists = availability.some(
      (slot) =>
        slot.day === day &&
        slot.startTime === startTime &&
        slot.endTime === endTime
    );

    if (alreadyExists) {
      setMessage("This availability slot already exists.");
      return;
    }

    const hasOverlap = availability.some((slot) => {
      if (slot.day !== day) return false;

      return (
        startTime < slot.endTime &&
        endTime > slot.startTime
      );
    });

    if (hasOverlap) {
      setMessage("This time overlaps with an existing slot.");
      return;
    }

    try {
      await createSlot({
        day,
        startTime,
        endTime
      });

      setDay("MONDAY");
      setStartTime("");
      setEndTime("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setMessage("Failed to save slot.");
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 h-fit shadow-sm">
      <h2 className="text-xl font-semibold mb-1 text-gray-900">
        Add Availability
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Set the times when students can book sessions.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Day
          </label>

          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Start Time
          </label>

          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            End Time
          </label>

          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {message && (
          <div className="bg-red-50 text-red-600 border border-red-200 rounded-xl p-3 text-sm">
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Saving..." : "Save Availability"}
        </button>
      </form>
    </div>
  );
}