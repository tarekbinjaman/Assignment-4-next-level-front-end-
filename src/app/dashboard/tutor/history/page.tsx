'use client'
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
    <div>
        <h1 className="text-3xl font-blackbold">History</h1>
    </div>
   )
}
