"use client";

import { useParams } from "next/navigation";
import { useSingleTutor } from "@/src/hooks/tutor/useSingleTutor";
import TutorHero from "@/src/components/tutorRoute/TutorHero";
import TutorAbout from "@/src/components/tutorRoute/TutorAbout";
import TutorPricingCard from "@/src/components/tutorRoute/TutorPricingCard";
import TutorStats from "@/src/components/tutorRoute/TutorStats";
import TutorReviews from "@/src/components/tutorRoute/review/TutorReviews";
import { useState } from "react";
import BookingModal from "@/src/components/dashboard/booking/BookingModal";

export default function TutorProfilePage() {
  const [openBookingModal, setOpenBookingModal] = useState(false);

  const { id } = useParams();

  const { data, isLoading, isError } = useSingleTutor(id as string);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-20">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-20">Something went wrong.</div>
    );
  }

  const tutor = data.data;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-10">
      <TutorHero tutor={tutor} />
      <TutorStats tutor={tutor} />
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* Left Content */}
        <div className="space-y-8 lg:col-span-2">
          <TutorAbout tutor={tutor} />
          <TutorReviews tutorId={tutor.id} />
        </div>

        {/* Right Sidebar */}
        <TutorPricingCard
          setOpenBookingModal={setOpenBookingModal}
          tutor={tutor}
        />
      </div>
      <BookingModal
        open={openBookingModal}
        onOpenChange={setOpenBookingModal}
        tutorId={tutor.id}
        tutorName={tutor.user.name}
        availability={tutor.availability}
      />
    </div>
  );
}
