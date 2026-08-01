"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";

import ReviewFilters from "@/src/components/dashboard/tutor/reviews/ReviewFilters";
import ReviewHeader from "@/src/components/dashboard/tutor/reviews/ReviewHeader";
import ReviewList from "@/src/components/dashboard/tutor/reviews/ReviewList";
import ReviewStats from "@/src/components/dashboard/tutor/reviews/ReviewStats";
import { useTutorReviews } from "@/src/hooks/reviews/useTutorReviews";
import { useMe } from "@/src/hooks/useMe/useMe";

export default function ViewReviews() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("ALL");
  const [sort, setSort] = useState("Newest");

  const [debouncedSearch] = useDebounce(search, 500);

  const { data: me } = useMe();
  const tutorId = me?.data?.tutorProfile?.id;

  const { data, isLoading } = useTutorReviews(
    tutorId,
    sort,
    debouncedSearch,
    rating
  );

  // Default values until the API responds
  const reviews = data?.data?.reviews ?? [];
  const averageRating = data?.data?.averageRating ?? 0;
  const totalReviews = data?.data?.totalReviews ?? 0;

  console.log("all in one", {reviews, averageRating, totalReviews, tutorId, data})
  console.log("Search, rating, sort", search, rating, sort)
  return (
    <div className="space-y-8">
      <ReviewHeader />

      <ReviewStats
        stats={{
          averageRating,
          totalReviews,
        }}
      />

      <ReviewFilters
        search={search}
        rating={rating}
        sort={sort}
        totalReviews={totalReviews}
        onSearchChange={setSearch}
        onRatingChange={setRating}
        onSortChange={setSort}
      />

      <ReviewList data={reviews} />
    </div>
  );
}