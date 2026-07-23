"use client";

import {
  CalendarDays,
  Clock3,
  BookOpen,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import StatusBadge from "../my-sessions/StatusBadge";

type Session = {
  id: string;
  studentName: string;
  studentImage?: string;
  category: string;
  date: string;
  startTime: string;
  endTime: string;
  status: "COMPLETED" | "CANCELLED";
};

type Props = {
  session: Session;
};

export default function HistoryCard({ session }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-primary/10">
            {session.studentImage ? (
              <Image
                src={session.studentImage}
                alt={session.studentName}
                width={64}
                height={64}
                className="h-16 w-16 object-cover"
              />
            ) : (
              <span className="text-xl font-bold text-primary">
                {session.studentName.charAt(0)}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              {session.studentName}
            </h3>

            <p className="text-sm text-slate-500">
              Student
            </p>
          </div>
        </div>

        <StatusBadge status={session.status} />
      </div>

      {/* Details */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoCard
          icon={<BookOpen size={18} />}
          label="Subject"
          value={session.category}
        />

        <InfoCard
          icon={<CalendarDays size={18} />}
          label="Date"
          value={new Date(session.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        />

        <InfoCard
          icon={<Clock3 size={18} />}
          label="Time"
          value={`${session.startTime} - ${session.endTime}`}
        />
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-700">
        <div className="flex items-center gap-2 text-sm">
          {session.status === "COMPLETED" ? (
            <>
              <CheckCircle2 className="text-green-600" size={18} />
              <span className="text-green-600">
                Session completed successfully
              </span>
            </>
          ) : (
            <>
              <XCircle className="text-red-600" size={18} />
              <span className="text-red-600">
                Session was cancelled
              </span>
            </>
          )}
        </div>

        <Link href={`/dashboard/tutor/mySession/${session.id}`}>
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
            <Eye size={16} />
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
      <div className="mb-2 flex items-center gap-2 text-primary">
        {icon}
        <span className="text-sm">{label}</span>
      </div>

      <p className="font-semibold">{value}</p>
    </div>
  );
}