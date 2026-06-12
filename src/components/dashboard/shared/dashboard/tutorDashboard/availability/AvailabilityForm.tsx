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

export default function AvailabilityForm({
  tutorId,
}: {
  tutorId: string;
}) {
  const [day, setDay] = useState("MONDAY");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const {data: availability = []} = useMyAvailability();

  const { mutateAsync: createSlot, isPending } =
    useCreateAvailability();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Checking is this availability exist before

    const alreadyExists = availability.some((slot) => 
    slot.day === day && 
    slot.startTime === startTime && 
    slot.endTime === endTime
    );

    if(alreadyExists) {
      alert("This availability slot already exists.");
      return;
    };

    // checking the new availability is overlaping any existing availability or not
    const hashOverlap = availability.some((slot) => {
      if(slot.day !== day) return false;

      return (
        startTime < slot.endTime && 
        endTime < slot.startTime
      );
    });

    if(hashOverlap) {
      alert("This time overlaps with an existing slot.")
      return;
    }

    try {
      await createSlot({
        tutorId,
        day,
        startTime,
        endTime,
      });

      setDay("MONDAY");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-lg p-5 space-y-4"
    >
      <h2 className="text-xl font-semibold">
        Set Availability
      </h2>

      <select
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className="w-full border rounded p-2"
      >
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className="w-full border rounded p-2"
      />

      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className="w-full border rounded p-2"
      />

      <button
        type="submit"
        disabled={isPending}
        
        className="bg-black text-white px-4 py-2 rounded active:scale-90"
      >
        {isPending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}