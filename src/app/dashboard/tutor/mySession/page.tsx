'use client'
import SessionFilters from "@/src/components/dashboard/tutor/my-sessions/SessionFilters";
import SessionHeader from "@/src/components/dashboard/tutor/my-sessions/SessionHeader";
import { useState } from "react";

export default function MySession() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("desc");
  return (
    <div className="space-y-8">
      <SessionHeader />
      <SessionFilters
        search={search}
        status={status}
        sort={sort}
        totalSessions={24}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onSortChange={setSort}
      />
    </div>
  );
}
