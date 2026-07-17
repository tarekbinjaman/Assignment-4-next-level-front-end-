"use client";

import SessionCard from "./SessionCard";

type Session = {
  id: string;
  studentName: string;
  studentImage?: string;
  category: string;
  date: string;
  time: string;
  startTime: string;  
  endTime: string;
  status: "PENDING" | "ACCEPTED" | "COMPLETED" | "CANCELLED";
};

type Props = {
  sessions: Session[];
};

export default function SessionList({ sessions }: Props) {
  if (sessions.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
        <h3 className="text-lg font-semibold">
          No Sessions Found
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Try changing your search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {sessions?.map((session) => (
        <SessionCard
          key={session?.id}
          session={session}
        />
      ))}
    </div>
  );
}