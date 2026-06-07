"use client"

const days = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

export default function AvailAbilityForm({tutorId, refetch}: {tutorID: string; refetch: () => void;})