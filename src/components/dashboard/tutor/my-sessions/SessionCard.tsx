"use client";

import {
  CalendarDays,
  Clock3,
  BookOpen,
  GraduationCap,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import StatusBadge from "./StatusBadge";

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
  session: Session;
};

export default function SessionCard({ session }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      {/* Top */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        {/* Student */}
        <div className="flex items-center gap-4">
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content w-16 rounded-2xl text-xl font-bold">
              <span>{session?.studentName?.charAt(0)}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{session?.studentName}</h3>

            <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
              <GraduationCap size={15} />
              Student
            </p>
          </div>
        </div>

        <StatusBadge status={session?.status} />
      </div>

      {/* Details */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
          <BookOpen size={20} className="text-primary" />

          <div>
            <p className="text-xs text-slate-500">Subject</p>

            <p className="font-medium">{session?.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
          <CalendarDays size={20} className="text-primary" />

          <div>
            <p className="text-xs text-slate-500">Date</p>

            <p className="font-medium">
              {new Date(session.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
          <Clock3 size={20} className="text-primary" />

          <div>
            <p className="text-xs text-slate-500">Time</p>

            <p className="font-medium">
              {session?.startTime} - {session?.endTime}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
        {session?.status === "PENDING" && (
          <>
            <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-md">
              <CheckCircle2 size={16} />
              Accept
            </button>

            <button className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-all hover:bg-red-100 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400">
              <XCircle size={16} />
              Reject
            </button>
          </>
        )}

        {session?.status === "ACCEPTED" && (
          <>
            <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-md">
              <CheckCircle2 size={16} />
              Mark Complete
            </button>

            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
              <Eye size={16} />
              Details
            </button>
          </>
        )}

        {(session?.status === "COMPLETED" ||
          session?.status === "CANCELLED") && (
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            <Eye size={16} />
            View Details
          </button>
        )}
      </div>
    </div>
  );
}
