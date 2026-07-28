"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCreateReview } from "@/src/hooks/reviews/useCreateReview";
import { useUpdateReview } from "@/src/hooks/reviews/useUpdateReview";

type Props = {
  bookingId: string;
  tutorId: string;

  review?: {
    id: string;
    rating: number;
    comment: string;
  };

  onCancel?: () => void;
};

export default function CreateReviewForm({
  bookingId,
  tutorId,
  review,
  onCancel,
}: Props) {
  const [rating, setRating] = useState(review?.rating ?? 5);
  const [comment, setComment] = useState(review?.comment ?? "");

  const createReview = useCreateReview();
  const updateReview = useUpdateReview();

  // Update form values whenever review changes
  useEffect(() => {
    if (review) {
      setRating(review.rating);
      setComment(review.comment);
    }
  }, [review]);

  const handleSubmit = () => {
    if (!comment.trim()) return;

    if (review) {
      updateReview.mutate(
        {
          id: review.id,
          bookingId,
          tutorId,
          data: {
            rating,
            comment,
          },
        },
        {
          onSuccess: () => {
            onCancel?.();
          },
        }
      );

      return;
    }

    createReview.mutate({
      bookingId,
      tutorId,
      rating,
      comment,
    });
  };

  const isPending =
    createReview.isPending || updateReview.isPending;

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">
        {review ? "Edit Review" : "Leave a Review"}
      </h3>

      {/* Rating */}
      <div className="mt-6">
        <p className="mb-2 font-medium">Rating</p>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRating(item)}
            >
              <Star
                size={28}
                className={
                  item <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            </button>
          ))}
        </div>
      </div>

      {/* Comment */}
      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Comment
        </label>

        <textarea
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your learning experience..."
          className="w-full rounded-xl border p-3 outline-none focus:border-primary"
        />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        {review && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}

        <Button
          onClick={handleSubmit}
          disabled={isPending}
        >
          {isPending
            ? "Saving..."
            : review
            ? "Update Review"
            : "Submit Review"}
        </Button>
      </div>
    </div>
  );
}