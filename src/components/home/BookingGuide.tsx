"use client";

import {
  Search,
  CalendarDays,
  Clock3,
  Check,
  BookOpen,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Find Your Tutor",
    description:
      "Explore tutors and find someone who matches your learning goals.",
    icon: Search,
  },
  {
    number: "02",
    title: "Choose a Date",
    description:
      "Select a day that works for you from your tutor's available schedule.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Pick Your Time",
    description:
      "Choose an available time and session length that fits your schedule.",
    icon: Clock3,
  },
  {
    number: "04",
    title: "Book & Track",
    description:
      "Confirm your session and keep track of your upcoming lessons from your booking dashboard.",
    icon: Check,
  },
];

function StepPreview({ number }: { number: string }) {
  // 01 — Find tutor
  if (number === "01") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-4">
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
            <Search className="h-3.5 w-3.5 text-slate-400" />

            <span className="text-[10px] text-slate-400">
              Search tutors...
            </span>
          </div>

          <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50/50 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                <UserRound className="h-4 w-4 text-blue-500" />
              </div>

              <div>
                <div className="h-2.5 w-20 rounded-full bg-slate-800" />
                <div className="mt-1.5 h-2 w-14 rounded-full bg-slate-200" />
              </div>

              <span className="ml-auto text-[9px] font-semibold text-green-500">
                $20/hr
              </span>
            </div>

            <div className="mt-3 flex gap-1.5">
              <span className="rounded-full bg-white px-2 py-1 text-[8px] text-blue-500">
                Programming
              </span>

              <span className="rounded-full bg-white px-2 py-1 text-[8px] text-blue-500">
                React
              </span>
            </div>
          </div>

          <div className="mt-2 rounded-xl border border-slate-100 p-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-slate-100" />

              <div>
                <div className="h-2.5 w-16 rounded-full bg-slate-200" />
                <div className="mt-1.5 h-2 w-12 rounded-full bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 02 — Choose date
  if (number === "02") {
    const days = [
      2, 3, 4, 5, 6, 7, 8,
      9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 22,
    ];

    return (
      <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">
              August 2026
            </span>

            <CalendarDays className="h-4 w-4 text-blue-500" />
          </div>

          <div className="mt-4 grid grid-cols-7 gap-1 text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <span
                key={index}
                className="text-[8px] font-medium text-slate-400"
              >
                {day}
              </span>
            ))}

            {days.map((day) => (
              <div
                key={day}
                className={`flex h-6 items-center justify-center rounded-md text-[9px] ${
                  day === 18
                    ? "bg-slate-900 font-bold text-white"
                    : "text-slate-500"
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 03 — Pick time
  if (number === "03") {
    const times = [
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "5:00 PM",
    ];

    return (
      <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold text-slate-800">
            Select Time
          </p>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {times.map((time) => (
              <div
                key={time}
                className={`rounded-lg border px-1 py-2 text-center text-[9px] font-medium ${
                  time === "3:00 PM"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 text-slate-500"
                }`}
              >
                {time}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[10px] font-medium text-slate-500">
              Duration
            </span>

            <div className="flex gap-1.5">
              <span className="rounded-md border border-slate-200 px-2 py-1 text-[9px] text-slate-500">
                30 min
              </span>

              <span className="rounded-md bg-slate-900 px-2 py-1 text-[9px] font-medium text-white">
                60 min
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 04 — Book & track
  return (
    <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-4">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
            <Check className="h-5 w-5 text-green-500" />
          </div>

          <div>
            <p className="text-xs font-bold text-slate-800">
              Session Booked
            </p>

            <p className="mt-1 text-[9px] text-slate-400">
              Your session is confirmed
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2 rounded-lg bg-slate-50 p-3">
          <div className="flex justify-between">
            <span className="text-[9px] text-slate-400">
              Date
            </span>

            <span className="text-[9px] font-medium text-slate-700">
              Aug 18, 2026
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-[9px] text-slate-400">
              Time
            </span>

            <span className="text-[9px] font-medium text-slate-700">
              3:00 PM
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-[9px] text-slate-400">
              Duration
            </span>

            <span className="text-[9px] font-medium text-slate-700">
              60 minutes
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[9px] font-medium text-slate-400">
            My Bookings
          </span>

          <span className="rounded-md bg-blue-50 px-2 py-1 text-[8px] font-semibold text-blue-500">
            View
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BookingGuide() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-1/2 top-20 -z-10 h-72 w-72 translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            <BookOpen className="h-4 w-4" />
            Start learning
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Learn from the{" "}
            <span className="text-blue-500">right tutor.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
            Find an expert, choose a time that works for you, and book your
            learning session in just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Number + icon */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-500">
                    {step.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Mini UI */}
                <StepPreview number={step.number} />

                {/* Card content */}
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {/* <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center text-center">
          <p className="text-lg font-semibold text-slate-900">
            Ready to start learning?
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Find the right tutor and book your first session today.
          </p>

          <div className="mt-5">
            <Button asChild className="rounded-xl px-6">
              <Link href="/tutors">Find a Tutor</Link>
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}