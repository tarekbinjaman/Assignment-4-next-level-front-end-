"use client";

import { useTutorSessionsByStatus } from "@/src/hooks/dashboard/useTutorDashboard";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
} from "lucide-react";

// import { useUpdateTutorSessionStatus } from "@/src/hooks/dashboard/useTutorDashboard";

type Props = {
  bookingId: string;
  status: "PENDING" | "ACCEPTED" | "COMPLETED" | "CANCELLED";
};

export default function SessionActions({
  bookingId,
  status,
}: Props) {
  const { mutate, isPending } = useTutorSessionsByStatus();

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Session Actions
        </h2>

        <p className="text-sm text-slate-500">
          Update the current session status.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">

        {status === "PENDING" && (
          <>
            <button
              disabled={isPending}
              onClick={() =>
                mutate({
                  sessionId: bookingId,
                  status: "ACCEPTED",
                })
              }
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
            >
              <CheckCircle2 size={18} />
              Accept Session
            </button>

            <button
              disabled={isPending}
              onClick={() =>
                mutate({
                  sessionId: bookingId,
                  status: "CANCELLED",
                })
              }
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700 disabled:opacity-60"
            >
              <XCircle size={18} />
              Reject Session
            </button>
          </>
        )}

        {status === "ACCEPTED" && (
          <button
            disabled={isPending}
            onClick={() =>
              mutate({
                sessionId: bookingId,
                status: "COMPLETED",
              })
            }
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-white hover:opacity-90 disabled:opacity-60"
          >
            <CheckCircle2 size={18} />
            Mark as Completed
          </button>
        )}

        {status === "COMPLETED" && (
          <div className="flex items-center gap-2 rounded-xl bg-green-50 px-5 py-3 text-green-700 dark:bg-green-900/20 dark:text-green-400">
            <CheckCircle2 size={18} />
            This session has been completed.
          </div>
        )}

        {status === "CANCELLED" && (
          <div className="flex items-center gap-2 rounded-xl bg-red-50 px-5 py-3 text-red-700 dark:bg-red-900/20 dark:text-red-400">
            <RotateCcw size={18} />
            This session has been cancelled.
          </div>
        )}

      </div>
    </section>
  );
}