"use client";

import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock3,
  User,
} from "lucide-react";

type NextSession = {
  studentName: string;
  category: string;
  date: string;
  time: string;
  duration: string;
  status: "Accepted" | "Pending" | "Completed";
};

type NextSessionCardProps = {
  session: NextSession;
};

export default function NextSessionCard({
  session,
}: NextSessionCardProps) {
  const statusColor = {
    Accepted:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Pending:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    Completed:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Next Session
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Your upcoming lesson.
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[session.status]}`}
        >
          {session.status}
        </span>
      </div>

      {/* Student */}
      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
          {session.studentName.charAt(0)}
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            {session.studentName}
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Student
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="mt-8 grid grid-cols-2 gap-5">
        <InfoItem
          icon={<BookOpen size={18} />}
          label="Subject"
          value={session.category}
        />

        <InfoItem
          icon={<Calendar size={18} />}
          label="Date"
          value={session.date}
        />

        <InfoItem
          icon={<Clock3 size={18} />}
          label="Time"
          value={session.time}
        />

        <InfoItem
          icon={<User size={18} />}
          label="Duration"
          value={session.duration}
        />
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-50 p-4 dark:bg-slate-800 hover:bg-slate-200 transition duration-300">
        <div>
          <p className="text-sm text-slate-500">
            Stay prepared for your upcoming lesson.
          </p>
        </div>

        <button className="btn btn-primary btn-sm flex items-center gap-1">
          View Session
          <ArrowRight size={18} />
        </button>
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
    <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
      <div className="mb-3 flex items-center gap-2 text-primary">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>

      <p className="font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}