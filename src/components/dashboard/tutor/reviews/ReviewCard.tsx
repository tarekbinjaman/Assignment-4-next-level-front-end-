"use client";

import Image from "next/image";
import {
  CalendarDays,
  BadgeCheck,
  Star,
} from "lucide-react";

type Review = {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    image?: string;
  };
};

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({
  review,
}: ReviewCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-4">
          {review.user.image ? (
            <Image
              src={review.user.image}
              alt={review.user.name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl object-cover"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-content">
              {review.user.name.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold">
              {review.user.name}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <CalendarDays size={15} />
              {new Date(review.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
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

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
        <p className="leading-7 text-slate-600 italic dark:text-slate-300">
          "{review.comment}"
        </p>
      </div>
    </div>
  );
}