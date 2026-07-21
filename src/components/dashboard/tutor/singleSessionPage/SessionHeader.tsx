"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  status: "PENDING" | "ACCEPTED" | "COMPLETED" | "CANCELLED";
};

export default function SessionHeader({ status }: Props) {
  const statusColor = {
    ACCEPTED:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PENDING:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    COMPLETED:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    CANCELLED:
      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <Link
          href="/dashboard/tutor/mySession"
          className="mb-4 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-primary"
        >
          <ArrowLeft size={18} />
          Back to Sessions
        </Link>

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Session Details
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          View complete information about this tutoring session.
        </p>
      </div>

      <span
        className={`rounded-full px-4 py-2 text-sm font-semibold ${statusColor[status]}`}
      >
        {status}
      </span>
    </div>
  );
}