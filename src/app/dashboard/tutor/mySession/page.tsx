"use client";
import Pagination from "@/src/components/dashboard/tutor/my-sessions/Pagination";
import SessionFilters from "@/src/components/dashboard/tutor/my-sessions/SessionFilters";
import SessionHeader from "@/src/components/dashboard/tutor/my-sessions/SessionHeader";
import SessionList from "@/src/components/dashboard/tutor/my-sessions/SessionList";
import { useTutorSessions } from "@/src/hooks/dashboard/useTutorDashboard";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export default function MySession() {
  const [search, setSearch] = useState("");
  // using debounce
  const [debouncedSearch] = useDebounce(search, 500);
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading } = useTutorSessions(
    debouncedSearch,
    status,
    sort,
    page,
    limit,
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1); // Reset to first page when search changes
  };
  const handleStatusChange = (value: string) => {
    setStatus(value);
    setPage(1); // Reset to first page when status changes
  };
  const handleSortChange = (value: "asc" | "desc") => {
    setSort(value);
    setPage(1); // Reset to first page when sort changes
  };
  console.log("Tutor sessions data from my session page", data);
  return (
    <div className="space-y-8">
      <SessionHeader />
      <SessionFilters
        search={search}
        status={status}
        sort={sort}
        totalSessions={data?.allSessions?.length || 0}
        onSearchChange={handleSearchChange}
        onStatusChange={handleStatusChange}
        onSortChange={handleSortChange}
      />
      <SessionList sessions={data?.allSessions || []} />
      <Pagination
        page={page}
        totalPages={data?.pagination.totalPages || 1}
        onPageChange={setPage}
      />
    </div>
  );
}
