"use client";

import { useState } from "react";
import TutorCard from "@/src/components/tutorRoute/TutorCard";
import TutorFilters from "@/src/components/tutorRoute/TutorFilters";
import TutorSearch from "@/src/components/tutorRoute/TutorSearch";
import { useTutors } from "@/src/hooks/tutor/useTutors";
import { useDebounce } from "use-debounce";

export default function Tutors() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [availableDays, setAvailableDays] = useState<string[]>([]);
  const [search, setSearch] = useState("");

// using debounce
const [debouncedSearch] = useDebounce(search, 500);

  const { data } = useTutors(category, sort, debouncedSearch, availableDays);
  {console.log("Teachers Data", data)}

  const tutors = data?.data || [];

  // const filteredTutors = tutors.filter((tutor: any) =>
  //   (tutor?.name ?? "").toLowerCase().includes(search.toLowerCase()),
  // );

  return (
    <div className="p-6">
      {/* HEADER ROW (NEW UI IMPROVEMENT) */}
      <div className="flex xl:flex-row items-center xl:gap-17 mb-6 w-full ">
        <h1 className="text-3xl text-nowrap font-bold  ">Find Your Tutor</h1>

        <div className="2xl:w-[1554px] xl:w-[1104px] xl:block hidden">
          <TutorSearch value={search} onChange={setSearch} />
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="xl:flex-none flex gap-4 items-center">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="xl:hidden mb-4 px-4 py-2 border rounded-lg"
        >
          Filter
        </button>
        {/* visible in laptop, tablet,mobile */}
        <div className="xl:hidden lg:w-[875px] md:w-[620px] w-[410px] mb-5">
          <TutorSearch value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden xl:block w-64 shrink-0">
          <TutorFilters
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
            availableDays={availableDays}
            setAvailableDays={setAvailableDays}
          />
        </aside>

        {/* Mobile Filters */}
        {showFilters && (
          <>
            <div
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setShowFilters(false)}
            />

            <div className="absolute top-55 md:top-50 z-50 w-80 animate-in fade-in zoom-in-95 duration-200">
              <TutorFilters
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
                availableDays={availableDays}
                setAvailableDays={setAvailableDays}
              />
            </div>
          </>
        )}

        {/* Tutor Cards */}
        <section className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-4 xl:gap-y-9">
            {tutors.map((tutor: any) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
