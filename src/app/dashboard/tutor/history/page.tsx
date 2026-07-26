"use client";
import HistoryFilters from "@/src/components/dashboard/tutor/history/HistoryFilters";
import HistoryHeader from "@/src/components/dashboard/tutor/history/HistoryHeader";
import HistoryList from "@/src/components/dashboard/tutor/history/HistoryList";
import Pagination from "@/src/components/pagination/Pagination";
import { UseTutorDashboard } from "@/src/hooks/dashboard/useTutorDashboard";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export default function HistoryPage() {
  const [search, setSearch] = useState("");
  // using debounce
  const [debouncedSearch] = useDebounce(search, 500);
  const [sort, setSort] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading } = UseTutorDashboard(
    debouncedSearch,
    "COMPLETED,CANCELLED",
    sort,
    page,
    limit,
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log("Data from history page:", data);
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1); // Reset to first page when search changes
  };
  const handleSortChange = (value: "asc" | "desc") => {
    setSort(value);
    setPage(1); // Reset to first page when sort changes
  };

  return (
    <div className="space-y-6">
      <HistoryHeader />

      <HistoryFilters
        search={search}
        onSearchChange={handleSearchChange}
        sort={sort}
        onSortChange={handleSortChange}
      />

      {/* History List */}
      <HistoryList sessions={data?.allSessions ?? []} />

      {/* Pagination */}
      <Pagination
        page={page}
        totalPages={data?.pagination.totalPages || 1}
        onPageChange={setPage}
      />
    </div>
  );
}
