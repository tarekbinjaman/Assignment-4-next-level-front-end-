"use client";

import { Star } from "lucide-react";

export default function ReviewHeader() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            Student Feedback
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
            Reviews & Ratings
          </h1>

          <p className="mt-2 max-w-2xl text-slate-500 dark:text-slate-400">
            Read feedback from your students, monitor your performance,
            and continue improving your teaching experience.
          </p>
        </div>
      </div>
    </section>
  );
}