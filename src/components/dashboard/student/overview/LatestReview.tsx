"use client";

import { MessageSquareQuote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type LatestReviewProps = {
  review: {
    tutorName: string;
    rating: number;
    comment: string;
    createdAt: string;
  } | null;
};

export default function LatestReview({
  review,
}: LatestReviewProps) {
  if (!review) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <MessageSquareQuote className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Latest Review
            </h2>

            <p className="text-sm text-muted-foreground">
              You haven't written any reviews yet.
            </p>
          </div>
        </div>

        <Button className="mt-6 w-full" variant="outline">
          Browse Completed Sessions
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="flex items-center gap-3">
        <div className="rounded-full bg-primary/10 p-3">
          <MessageSquareQuote className="h-5 w-5 text-primary" />
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Latest Review
          </h2>

          <p className="text-sm text-muted-foreground">
            Your most recent feedback.
          </p>
        </div>
      </div>

      {/* Rating */}

      <div className="mt-6 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < review.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Comment */}

      <blockquote className="mt-5 border-l-4 border-primary pl-4 italic text-muted-foreground">
        "{review.comment}"
      </blockquote>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <div>
          <p className="font-semibold">
            {review.tutorName}
          </p>

          <p className="text-sm text-muted-foreground">
            {review.createdAt}
          </p>
        </div>

        <Button variant="outline" size="sm">
          View Review
        </Button>
      </div>
    </div>
  );
}