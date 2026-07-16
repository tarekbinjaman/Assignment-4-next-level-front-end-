"use client";

import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

type Session = {
  id: string;
  studentName: string;
  category: string;
  date: string;
  time: string;
  status: "PENDING" | "ACCEPTED" | "COMPLETED" | "CANCELLED";
};

type RecentSessionsProps = {
  sessions: Session[];
};

const statusStyles = {
  PENDING:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",

  ACCEPTED:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",

  COMPLETED: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",

  CANCELLED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

export default function RecentSessions({ sessions }: RecentSessionsProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Recent Sessions
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Your latest tutoring sessions.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 transition-all hover:shadow-md dark:border-slate-700 lg:flex-row lg:items-center lg:justify-between"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                {session.studentName.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {session.studentName}
                </h3>

                <p className="text-sm text-slate-500">{session.category}</p>
              </div>
            </div>

            {/* Middle */}
            <div className="flex flex-col text-sm text-slate-500">
              <span>{session.date}</span>
              <span>{session.time}</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[session.status]}`}
              >
                {session.status}
              </span>

              <Button
                variant="outline"
                size="sm"
                className="rounded-xl px-4 hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
