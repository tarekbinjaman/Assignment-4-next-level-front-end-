"use client";

import { CalendarCheck } from "lucide-react";

export default function SessionHeader() {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between dark:border-slate-800 dark:bg-slate-900">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <CalendarCheck size={16} />
          Tutor Sessions
        </div>

        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
          My Sessions
        </h1>

        <p className="mt-2 max-w-2xl text-slate-500 dark:text-slate-400">
          Manage all your tutoring sessions, track upcoming lessons,
          and keep everything organized in one place.
        </p>
      </div>
    </section>
  );
}