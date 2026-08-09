"use client";

import { Star, Search, Filter } from "lucide-react";
import { useState } from "react";
import { useTutorReviews } from "@/src/hooks/reviews/useTutorReviews";
import ReviewCard from "./ReviewCard";
import { useDebounce } from "use-debounce";
import Pagination from "../../pagination/Pagination";

export default function TutorReviews({ tutorId, page, setPage, limit }: { tutorId: string; page: number; setPage: (page: number) => void; limit: number }) {
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
    page,
    limit
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
  const currentPage = data?.data?.currentPage ?? 1;
  const totalPages = data?.data?.totalPages ?? 1;
  const totalItem = data?.data?.totalItem ?? 0;
  console.log(
    "THis is review data from sigle tutor route",
data?.data,
totalReviews,
totalItem,
totalPages,
currentPage
  );
const handleSearchChnage = (value: string) => {
  setSearch(value);
  setPage(1); // Reset to first page when search changes
}

  return (
    <section className=" mt-4 bg-white rounded-3xl pb-4">
      {/* Header */}
      <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 lg:flex-row lg:items-center lg:justify-between dark:bg-slate-900">
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
      <div className="grid gap-4 rounded-3xl bg-white p-6 md:grid-cols-3 dark:bg-slate-900">
        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-slate-400" />

          <input
            value={search}
            onChange={(e) => handleSearchChnage(e.target.value)}
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
        {reviews.length > 0 ? (
          reviews.map((review) => (
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

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
}
