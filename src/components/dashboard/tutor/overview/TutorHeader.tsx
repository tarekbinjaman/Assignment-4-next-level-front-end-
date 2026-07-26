"use client";

import { useMe } from "@/src/hooks/useMe/useMe";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const {data} = useMe();
console.log("UseMe data from tutor dasboard", data);
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between dark:border-slate-800 dark:bg-slate-900">
      {/* Left */}
      <div>
        <p className="text-sm font-medium text-primary">
          Welcome back 👋
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          Ready to inspire your students today?
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
          Track your upcoming sessions, manage your schedule, and keep helping
          students achieve their goals.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          <CalendarDays className="h-4 w-4" />
          {today}
        </div>
      </div>

      {/* Right */}
      <div className="hidden lg:block">
        {data?.data?.image ? (
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-primary/20 shadow-md">
            <Image
              src={data?.data?.image}
              alt={data?.name || "Profile"}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
            {data?.name?.charAt(0)?.toUpperCase() || "T"}
          </div>
        )}
      </div>
    </section>
  );
}