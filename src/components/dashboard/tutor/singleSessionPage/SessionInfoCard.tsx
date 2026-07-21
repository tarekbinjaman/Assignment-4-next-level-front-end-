"use client";

import {
  BookOpen,
  CalendarDays,
  Clock3,
  Timer,
  CheckCircle2,
} from "lucide-react";

type Session = {
  category: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  status: "PENDING" | "ACCEPTED" | "COMPLETED" | "CANCELLED";
};

type Props = {
  session: Session;
};

export default function SessionInfoCard({ session }: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-primary/10 p-2 text-primary">
          <BookOpen size={20} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Session Information
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Details about this tutoring session.
          </p>
        </div>
      </div>

      <div className="grid gap-4">

        <InfoItem
          icon={<BookOpen size={18} />}
          label="Subject"
          value={session.category}
        />

        <InfoItem
          icon={<CalendarDays size={18} />}
          label="Date"
          value={new Date(session.date).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        />

        <InfoItem
          icon={<Clock3 size={18} />}
          label="Start Time"
          value={session.startTime}
        />

        <InfoItem
          icon={<Clock3 size={18} />}
          label="End Time"
          value={session.endTime}
        />

        <InfoItem
          icon={<Timer size={18} />}
          label="Duration"
          value={session.duration}
        />

        <InfoItem
          icon={<CheckCircle2 size={18} />}
          label="Status"
          value={session.status}
        />

      </div>
    </section>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
      <div className="flex items-center gap-3">
        <div className="text-primary">
          {icon}
        </div>

        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {label}
        </span>
      </div>

      <span className="font-semibold text-slate-900 dark:text-white">
        {value}
      </span>
    </div>
  );
}