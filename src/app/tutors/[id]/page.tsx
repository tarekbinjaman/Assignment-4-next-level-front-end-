"use client";

import { useParams, useRouter } from "next/navigation";
import { useSingleTutor } from "@/src/hooks/tutor/useSingleTutor";
import TutorHero from "@/src/components/tutorRoute/TutorHero";
import TutorAbout from "@/src/components/tutorRoute/TutorAbout";
import TutorPricingCard from "@/src/components/tutorRoute/TutorPricingCard";
import TutorStats from "@/src/components/tutorRoute/TutorStats";
import TutorReviews from "@/src/components/tutorRoute/review/TutorReviews";
import { useState } from "react";
import BookingModal from "@/src/components/booking/BookingModal";
import { useAuth } from "@/src/context/AuthContext";
import { toast } from "sonner";


export default function TutorProfilePage() {
  const [openBookingModal, setOpenBookingModal] = useState(false);

  const { id } = useParams();
  const router = useRouter();

  const { user, loading: authLoading } = useAuth();

  const { data, isLoading, isError } = useSingleTutor(id as string);
  
  // handle booking 

  const handleBooking = () => {
    if(authLoading) return;
    if(!user) {
      toast.error("Please login first to book a tutor.");
      setTimeout(() => {
        router.push("/login")
      }, 2000);

      return;
    }
    setOpenBookingModal(true);
  }
  
    // pagination states
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
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
<div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
  {/* Left Content */}
  <div className="space-y-8">
    <TutorAbout tutor={tutor} />
  </div>

  {/* Right Sidebar */}
  <TutorPricingCard
    onBook={handleBooking}
    tutor={tutor}
  />
</div>
      
      {/* Tutor reviews */}
      <TutorReviews tutorId={tutor?.id} page={page} setPage={setPage} limit={limit} />

      {/* pagination */}

      {/* Booking modal */}
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
