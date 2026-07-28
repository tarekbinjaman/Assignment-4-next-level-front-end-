"use client";

import { useState } from "react";
import { useBookingReview } from "@/src/hooks/reviews/useBookingReview";
import CreateReviewForm from "./CreateReviewForm";
import ReviewCard from "./ReviewCard";
// import ReviewCard from "./ReviewCard.tsx";

type Props = {
  bookingId: string;
  tutorId: string;
};

export default function ReviewSection({
  bookingId,
  tutorId,
}: Props) {
  const { data, isLoading } = useBookingReview(bookingId);

  const review = data?.data;

  const [editing, setEditing] = useState(false);

  if (isLoading) {
    return <p>Loading review...</p>;
  }

  // No review yet
  if (!review) {
    return (
      <CreateReviewForm
        bookingId={bookingId}
        tutorId={tutorId}
      />
    );
  }

  // Editing existing review
  if (editing) {
    return (
      <CreateReviewForm
        bookingId={bookingId}
        tutorId={tutorId}
        review={review}
        onCancel={() => setEditing(false)}
      />
    );
  }

  // Normal review card
  return (
    <ReviewCard
      review={review}
      onEdit={() => setEditing(true)}
    />
  );
}