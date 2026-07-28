"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { useCreateReview } from "@/src/hooks/reviews/useCreateReview";

type Props = {
  bookingId: string;
  tutorId: string;
};

export default function CreateReviewForm({
  bookingId,
  tutorId,
}: Props) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const { mutate, isPending } = useCreateReview();

  const handleSubmit = () => {
    if (!comment.trim()) return;

    mutate({
      bookingId,
      tutorId,
      rating,
      comment,
    });

    setComment("");
    setRating(5);
  };

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">
        Leave a Review
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

      <button
        onClick={handleSubmit}
        disabled={isPending}
        className="mt-6 rounded-xl bg-primary px-6 py-3 text-white disabled:opacity-50"
      >
        {isPending ? "Submitting..." : "Submit Review"}
      </button>
    </div>
  );
}