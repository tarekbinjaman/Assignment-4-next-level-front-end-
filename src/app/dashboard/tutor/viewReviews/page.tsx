"use client";
import ReviewFilters from "@/src/components/dashboard/tutor/reviews/ReviewFilters";
import ReviewHeader from "@/src/components/dashboard/tutor/reviews/ReviewHeader";
import ReviewList from "@/src/components/dashboard/tutor/reviews/ReviewList";
import ReviewStats from "@/src/components/dashboard/tutor/reviews/ReviewStats";
import { useState } from "react";

export default function ViewReviews() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  const [sort, setSort] = useState("desc");
  return (
    <div className="space-y-8">
      <ReviewHeader />

      <ReviewStats
        stats={{
          averageRating: 4.8,
          totalReviews: 126,
          positiveReviews: 97,
          monthlyRating: 4.9,
        }}
      />

      <ReviewFilters
        search={search}
        rating={rating}
        sort={sort}
        totalReviews={126}
        onSearchChange={setSearch}
        onRatingChange={setRating}
        onSortChange={setSort}
      />

      <ReviewList
        reviews={[
          {
            id: "1",
            studentName: "John Doe",
            category: "React Development",
            rating: 5,
            date: "20 Jul 2026",
            comment:
              "Excellent tutor! The explanations were very clear and practical. I finally understand React hooks and state management.",
          },
          {
            id: "2",
            studentName: "Sarah Smith",
            category: "Node.js",
            rating: 4,
            date: "18 Jul 2026",
            comment:
              "Very patient and knowledgeable. The session was interactive and helped me build confidence with backend development.",
          },
          {
            id: "3",
            studentName: "Alex Johnson",
            category: "JavaScript",
            rating: 5,
            date: "15 Jul 2026",
            comment:
              "One of the best learning experiences I've had. Every concept was explained with real-world examples.",
          },
        ]}
      />
    </div>
  );
}
