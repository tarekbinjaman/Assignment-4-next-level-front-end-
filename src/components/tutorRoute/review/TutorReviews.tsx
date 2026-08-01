"use client";

import { Star, Search, Filter } from "lucide-react";
import { useState } from "react";
import { useTutorReviews } from "@/src/hooks/reviews/useTutorReviews";
import ReviewCard from "./ReviewCard";
import { useDebounce } from "use-debounce";

export default function TutorReviews({ tutorId }: { tutorId: string }) {
  const [search, setSearch] = useState("");
  // using debounce
  const [debouncedSearch] = useDebounce(search, 500);
  const [rating, setRating] = useState("ALL");
  const [sort, setSort] = useState("Newest");
  const { data, isLoading } = useTutorReviews(
    tutorId,
    sort,
    debouncedSearch,
    rating,
  );

  if (isLoading) {
    return (
      <div className="rounded-2xl border p-10 text-center mt-8">
        Loading reviews...
      </div>
    );
  }

  const reviews = data?.data?.reviews || [];
  const average = data?.data?.averageRating ?? 0;
  const totalReviews = data?.data?.totalReviews ?? 0;

  console.log(
    "THis is review data from sigle tutor route",
    reviews,
    average,
    totalReviews,
  );
  console.log("average:", average);
  console.log("typeof average:", typeof average);

  const filteredReviews = reviews
    .filter((review) =>
      review.user.name.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((review) =>
      rating === "ALL" ? true : review.rating === Number(rating),
    )
    .sort((a, b) => {
      if (sort === "Highest") return b.rating - a.rating;
      if (sort === "Lowest") return a.rating - b.rating;

      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <section className="space-y-8 mt-4">
      {/* Header */}
      <div className="flex flex-col gap-6 rounded-3xl border bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between dark:bg-slate-900">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold">Student Reviews</h2>

          <p className="mt-2 text-sm text-slate-500">
            Read feedback from students who booked sessions.
          </p>
        </div>

        {/* Right */}
        <div className="rounded-2xl bg-primary/10 px-6 py-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Star className="fill-yellow-400 text-yellow-400" size={24} />

            <span className="text-3xl font-bold">{average.toFixed(1)}</span>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            {reviews.length} Reviews
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid gap-4 rounded-3xl border bg-white p-6 shadow-sm md:grid-cols-3 dark:bg-slate-900">
        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search student..."
            className="w-full rounded-xl border py-2.5 pl-10 pr-3 outline-none focus:border-primary"
          />
        </div>

        {/* Rating */}
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="rounded-xl border px-3 py-2.5"
        >
          <option value="ALL">All Ratings</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-xl border px-3 py-2.5"
        >
          <option value="Newest">Newest</option>
          <option value="Highest">Highest</option>
          <option value="Lowest">Lowest</option>
        </select>
      </div>

      {/* Review List */}
      <div className="space-y-5">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <div className="rounded-2xl border border-dashed py-16 text-center">
            <Filter className="mx-auto mb-4 text-slate-400" size={36} />

            <h3 className="text-lg font-semibold">No Reviews Found</h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
