"use client";

import {
  CalendarDays,
  BadgeCheck,
  BookOpen,
  Star,
} from "lucide-react";

type Review = {
  id: string;
  studentName: string;
  studentImage?: string;
  category: string;
  rating: number;
  comment: string;
  date: string;
};

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-4">
          <div className="avatar placeholder">
            <div className="w-16 rounded-2xl bg-primary text-xl font-bold text-primary-content">
              <span>{review.studentName.charAt(0)}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              {review.studentName}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <BookOpen size={15} />
                {review.category}
              </div>

              <div className="flex items-center gap-1">
                <CalendarDays size={15} />
                {review.date}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={18}
                className={
                  star <= review.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-slate-300"
                }
              />
            ))}
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            <BadgeCheck size={14} />
            Verified Session
          </span>
        </div>
      </div>

      {/* Review */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
        <p className="italic leading-7 text-slate-600 dark:text-slate-300">
          “{review.comment}”
        </p>
      </div>
    </div>
  );
}