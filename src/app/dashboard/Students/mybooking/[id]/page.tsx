"use client";
import BookingActions from "@/src/components/dashboard/student/mybooking/view/BookingActions";
import BookingHero from "@/src/components/dashboard/student/mybooking/view/BookingHero";
import BookingNotesCard from "@/src/components/dashboard/student/mybooking/view/BookingNotesCard";
import BookingSessionCard from "@/src/components/dashboard/student/mybooking/view/BookingSessionCard";
import BookingTutorCard from "@/src/components/dashboard/student/mybooking/view/BookingTutorCard";
import CreateReviewForm from "@/src/components/dashboard/student/reviews/CreateReviewForm";
import ReviewSection from "@/src/components/dashboard/student/reviews/ReviewSection";
import { useSingleBooking } from "@/src/hooks/booking/useSingleBooking";
import { useParams } from "next/navigation";

export default function BookingDetailsPage() {
  const params = useParams();

  const { data: booking, isPending } = useSingleBooking(params.id as string);

  const status = booking?.status;
  console.log("THis is single booking from single booking page", booking);

  if (isPending) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 space-y-6">
      {/* Hero */}
      <BookingHero data={booking} />

      {/* Session */}
      <BookingSessionCard data={booking} />

      {/* Tutor */}
      <BookingTutorCard data={booking?.tutor} />

      {/* Notes */}
      <BookingNotesCard data={booking?.notes} />

      {/* Actions */}
      <BookingActions data={booking} />

{status === "COMPLETED" && (
  <ReviewSection
    bookingId={booking.id}
    tutorId={booking.tutorId}
  />
)}
    </div>
  );
}
