"use client";
import SessionFilters from "@/src/components/dashboard/tutor/my-sessions/SessionFilters";
import SessionHeader from "@/src/components/dashboard/tutor/my-sessions/SessionHeader";
import SessionList from "@/src/components/dashboard/tutor/my-sessions/SessionList";
import {  useTutorSessions } from "@/src/hooks/dashboard/useTutorDashboard";
import { useState } from "react";

export default function MySession() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("desc");
  const {data, isLoading} = useTutorSessions(search, status, sort);
  console.log("Tutor sessions data from my session page", data);
  return (
    <div className="space-y-8">
      <SessionHeader />
      <SessionFilters
        search={search}
        status={status}
        sort={sort}
        totalSessions={data?.allSessions?.length || 0}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onSortChange={setSort}
      />
      <SessionList
        sessions={data?.allSessions || []}
      />
    </div>
  );
}
