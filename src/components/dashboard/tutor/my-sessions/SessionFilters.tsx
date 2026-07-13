"use client";

import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SessionFiltersProps = {
  search: string;
  status: string;
  sort: string;
  totalSessions: number;

  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

export default function SessionFilters({
  search,
  status,
  sort,
  totalSessions,
  onSearchChange,
  onStatusChange,
  onSortChange,
}: SessionFiltersProps) {
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

        {/* Status */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-primary/40 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Status
          </label>

          <Select
            value={status || "ALL"}
            onValueChange={(value) =>
              onStatusChange(value === "ALL" ? "" : value)
            }
          >
            <SelectTrigger className="w-full rounded-xl border-slate-300">
              <SelectValue placeholder="All Sessions" />
            </SelectTrigger>

            <SelectContent className="rounded-xl">
              <SelectItem value="ALL">All Sessions</SelectItem>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="ACCEPTED">Accepted</SelectItem>
              <SelectItem value="COMPLETED">Completed</SelectItem>
              <SelectItem value="CANCELLED">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-primary/40 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Sort By
          </label>

          <Select value={sort} onValueChange={onSortChange}>
            <SelectTrigger className="w-full rounded-xl border-slate-300">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="rounded-xl">
              <SelectItem value="desc">Newest First</SelectItem>
              <SelectItem value="asc">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Total Sessions */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 transition-all hover:shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total Sessions
          </p>

          <h2 className="mt-3 text-4xl font-bold text-primary">
            {totalSessions}
          </h2>

          <p className="mt-2 text-xs text-slate-500">
            Matching current filters
          </p>
        </div>
      </div>
    </section>
  );
}