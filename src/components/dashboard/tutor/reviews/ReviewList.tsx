"use client";

import ReviewCard from "./ReviewCard";

type Review = {
  id: string;
  studentName: string;
  studentImage?: string;
  category: string;
  rating: number;
  comment: string;
  date: string;
};

type ReviewListProps = {
  reviews: Review[];
};

export default function ReviewList({
  reviews,
}: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h3 className="text-xl font-semibold">
          No Reviews Found
        </h3>

        <p className="mt-2 text-slate-500">
          Reviews matching your filters will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
}