"use client";
import SessionFilters from "@/src/components/dashboard/tutor/my-sessions/SessionFilters";
import SessionHeader from "@/src/components/dashboard/tutor/my-sessions/SessionHeader";
import SessionList from "@/src/components/dashboard/tutor/my-sessions/SessionList";
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
      <SessionList
        sessions={[
          {
            id: "1",
            studentName: "John Doe",
            category: "React Development",
            date: "20 Jul 2026",
            time: "6:00 PM - 7:00 PM",
            status: "PENDING",
          },
          {
            id: "2",
            studentName: "Sarah Smith",
            category: "Node.js",
            date: "18 Jul 2026",
            time: "4:00 PM - 5:00 PM",
            status: "ACCEPTED",
          },
          {
            id: "3",
            studentName: "Alex Johnson",
            category: "JavaScript",
            date: "15 Jul 2026",
            time: "8:00 PM - 9:00 PM",
            status: "COMPLETED",
          },
          {
            id: "4",
            studentName: "Emily Davis",
            category: "TypeScript",
            date: "12 Jul 2026",
            time: "2:00 PM - 3:00 PM",
            status: "CANCELLED",
          },
        ]}
      />
    </div>
  );
}
