"use client";

import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ReviewFiltersProps = {
  search: string;
  rating: string;
  sort: string;
  totalReviews: number;

  onSearchChange: (value: string) => void;
  onRatingChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

export default function ReviewFilters({
  search,
  rating,
  sort,
  totalReviews,
  onSearchChange,
  onRatingChange,
  onSortChange,
}: ReviewFiltersProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        {/* Search */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-primary/40 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Search Student
          </label>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Student name..."
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-11 pr-4 text-sm outline-none transition-all focus:border-primary dark:border-slate-600 dark:bg-slate-900"
            />
          </div>
        </div>

        {/* Rating */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-primary/40 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Rating
          </label>

          <Select
            value={rating || "ALL"}
            onValueChange={(value) =>
              onRatingChange(value === "ALL" ? "" : value)
            }
          >
            <SelectTrigger className="w-full rounded-xl">
              <SelectValue placeholder="All Ratings" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ALL">All Ratings</SelectItem>
              <SelectItem value="5">⭐⭐⭐⭐⭐ 5 Stars</SelectItem>
              <SelectItem value="4">⭐⭐⭐⭐ 4 Stars</SelectItem>
              <SelectItem value="3">⭐⭐⭐ 3 Stars</SelectItem>
              <SelectItem value="2">⭐⭐ 2 Stars</SelectItem>
              <SelectItem value="1">⭐ 1 Star</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-primary/40 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Sort By
          </label>

          <Select value={sort} onValueChange={onSortChange}>
            <SelectTrigger className="w-full rounded-xl">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="desc">Newest First</SelectItem>
              <SelectItem value="asc">Oldest First</SelectItem>
              <SelectItem value="highest">Highest Rating</SelectItem>
              <SelectItem value="lowest">Lowest Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Total Reviews */}
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 transition-all hover:shadow-sm dark:border-yellow-800 dark:bg-yellow-900/20">
          <p className="text-sm font-medium text-slate-500">
            Total Reviews
          </p>

          <h2 className="mt-3 text-4xl font-bold text-yellow-600">
            {totalReviews}
          </h2>

          <p className="mt-2 text-xs text-slate-500">
            Matching current filters
          </p>
        </div>
      </div>
    </section>
  );
}