"use client";

import { useState } from "react";
import TutorCard from "@/src/components/tutorRoute/TutorCard";
import TutorFilters from "@/src/components/tutorRoute/TutorFilters";
import { useTutors } from "@/src/hooks/tutor/useTutors";

export default function Tutors() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const { data, isLoading, error } = useTutors(
    category,
    sort
  );

  const tutors = data?.data || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Find Your Tutor
      </h1>

      {/* Mobile Filter Button */}
      <button
        onClick={() =>
          setShowFilters(!showFilters)
        }
        className="xl:hidden mb-4 px-4 py-2 border rounded-lg"
      >
        Filter
      </button>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden xl:block w-64 shrink-0">
          <TutorFilters
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />
        </aside>

        {/* Mobile Filters */}
        {showFilters && (
  <div className="absolute top-55 md:top-50 z-50 w-72 rounded-xl border bg-white p-4 shadow-lg">
    <button
      onClick={() => setShowFilters(false)}
      className="absolute right-3 top-3 text-lg font-semibold text-gray-500 hover:text-black"
    >
      ✕
    </button>

    <TutorFilters
      category={category}
      setCategory={setCategory}
      sort={sort}
      setSort={setSort}
    />
  </div>
        )}

        {/* Tutor cards */}

        <section className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-4 xl:gap-y-9">
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