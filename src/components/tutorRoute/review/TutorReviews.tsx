"use client";

import { useTutorReviews } from "@/src/hooks/reviews/useTutorReviews";
import ReviewCard from "./ReviewCard";

export default function TutorReviews({ tutorId }) {
  const { data, isLoading } = useTutorReviews(tutorId);

  if (isLoading) {
    return <p>Loading reviews...</p>;
  }

  const reviews = data?.data || [];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">
          Student Reviews
        </h2>
      </div>

      <div className="space-y-5">
        {reviews.length ? (
          reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))
        ) : (
          <div className="rounded-xl border border-dashed py-12 text-center text-gray-500">
            No reviews yet.
          </div>
        )}
      </div>
    </section>
  );
}