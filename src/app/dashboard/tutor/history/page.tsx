'use client'
import HistoryFilters from "@/src/components/dashboard/tutor/history/HistoryFilters";
import HistoryHeader from "@/src/components/dashboard/tutor/history/HistoryHeader";
import HistoryList from "@/src/components/dashboard/tutor/history/HistoryList";
import { UseTutorDashboard } from "@/src/hooks/dashboard/useTutorDashboard";
import { useState } from "react";

export default function HistoryPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("desc");
  const { data, isLoading } = UseTutorDashboard(search, "COMPLETED,CANCELLED", sort);
    if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log("Data from history page:", data);
   return (
    <div className="space-y-6">
      <HistoryHeader />

      <HistoryFilters
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      {/* History List */}
      <HistoryList sessions={data?.allSessions ?? []} />
    </div>
   )
}
