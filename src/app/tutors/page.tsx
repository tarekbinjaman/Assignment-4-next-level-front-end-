"use client";

import { useState } from "react";

import TutorCard from "@/src/components/tutorRoute/TutorCard";
import TutorFilters from "@/src/components/tutorRoute/TutorFilters";
import { useTutors } from "@/src/hooks/tutor/useTutors";

export default function Tutors() {
  const [category, setCategory] =
    useState("");

  const [sort, setSort] =
    useState("");

  const {
    data,
    isLoading,
    error,
  } = useTutors(category, sort);

  const tutors = data?.data || [];

  if (isLoading) {
    return (
      <div className="p-10">
        Loading tutors...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-500">
        Failed to load tutors
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Find Your Tutor
      </h1>

      <div className="grid grid-cols-12 gap-8">
        <aside className="col-span-3">
          <TutorFilters
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />
        </aside>

        <section className="col-span-9">
          <div className="grid md:grid-cols-2 gap-5">
            {tutors.map((tutor: any) => (
              <TutorCard
                key={tutor.id}
                tutor={tutor}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}