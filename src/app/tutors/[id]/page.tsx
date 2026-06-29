"use client";

import { useParams } from "next/navigation";
import { useSingleTutor } from "@/src/hooks/tutor/useSingleTutor";
import TutorHero from "@/src/components/tutorRoute/TutorHero";
import TutorAbout from "@/src/components/tutorRoute/TutorAbout";
import TutorPricingCard from "@/src/components/tutorRoute/TutorPricingCard";


export default function TutorProfilePage() {
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
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* Left Content */}
        <div className="space-y-8 lg:col-span-2">
          <TutorAbout tutor={tutor} />
        </div>

        {/* Right Sidebar */}
        <TutorPricingCard tutor={tutor} />
      </div>
    </div>
  );
}
