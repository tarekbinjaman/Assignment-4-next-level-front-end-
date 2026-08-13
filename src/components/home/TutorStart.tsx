"use client";

import {
  UserRound,
  GraduationCap,
  Clock3,
  Check,
  ChevronDown,
  BookOpen,
  CircleDollarSign,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Tutor",
    description:
      "Select Tutor when creating your SkillBridge account and unlock your teaching journey.",
  },
  {
    number: "02",
    title: "Build Your Profile",
    description:
      "Tell students about yourself, add your expertise, categories, experience, and hourly rate.",
  },
  {
    number: "03",
    title: "Set Availability",
    description:
      "Choose the days and times you're available so students know when they can book you.",
  },
];

export default function TutorGettingStarted() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            <GraduationCap className="h-4 w-4" />
            Start teaching
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Turn your knowledge into{" "}
            <span className="text-blue-500">impact.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
            Becoming a tutor on SkillBridge is simple. Create your profile,
            showcase your expertise, and choose when you're ready to teach.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-500">01</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                <UserRound className="h-5 w-5" />
              </div>
            </div>

            {/* Mini UI */}
            <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-5">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/70 blur-2xl" />

              <div className="relative">
                <p className="text-xs font-medium text-slate-400">
                  CREATE ACCOUNT
                </p>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <p className="text-xs text-slate-400">Your role</p>

                  <div className="mt-2 flex items-center justify-between rounded-lg border border-blue-500 bg-blue-50 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-semibold text-slate-800">
                        Tutor
                      </span>
                    </div>

                    <Check className="h-4 w-4 text-blue-500" />
                  </div>

                  <div className="mt-2 flex items-center justify-between px-3 py-2 text-sm text-slate-400">
                    <span>Student</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Choose Tutor
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Select Tutor when creating your SkillBridge account and unlock
              your teaching journey.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-500">02</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                <BookOpen className="h-5 w-5" />
              </div>
            </div>

            {/* Mini UI */}
            <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-5">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
                    <UserRound className="h-5 w-5 text-blue-500" />
                  </div>

                  <div>
                    <div className="h-3 w-24 rounded-full bg-slate-800" />
                    <div className="mt-2 h-2 w-16 rounded-full bg-slate-200" />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="h-2 w-12 rounded-full bg-slate-300" />

                  <div className="mt-2 h-2 w-full rounded-full bg-slate-100" />
                  <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-100" />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-600">
                    Programming
                  </span>

                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-600">
                    UI/UX
                  </span>

                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-500">
                    +2
                  </span>
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-green-50 px-2 py-1">
                  <CircleDollarSign className="h-3 w-3 text-green-500" />
                  <span className="text-[10px] font-semibold text-green-600">
                    $20/hr
                  </span>
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Build Your Profile
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Tell students about yourself, add your expertise, categories,
              experience, and hourly rate.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-500">03</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                <Clock3 className="h-5 w-5" />
              </div>
            </div>

            {/* Mini UI */}
            <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-5">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Your Schedule
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      Weekly availability
                    </p>
                  </div>

                  <Clock3 className="h-4 w-4 text-blue-500" />
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    ["MON", "10:00 AM", "12:00 PM"],
                    ["WED", "02:00 PM", "05:00 PM"],
                    ["FRI", "10:00 AM", "01:00 PM"],
                  ].map(([day, start, end]) => (
                    <div
                      key={day}
                      className="flex items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-2"
                    >
                      <span className="w-8 text-[9px] font-bold text-blue-500">
                        {day}
                      </span>

                      <span className="text-[10px] text-slate-500">
                        {start}
                      </span>

                      <span className="text-[10px] text-slate-300">—</span>

                      <span className="text-[10px] text-slate-500">
                        {end}
                      </span>

                      <Check className="ml-auto h-3 w-3 text-green-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Set Availability
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Choose the days and times you're available so students know when
              they can book you.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center text-center">
          <p className="text-lg font-semibold text-slate-900">
            Ready to share your skills?
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Create your tutor profile and start connecting with learners.
          </p>

          <button className="mt-5 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-600">
            Create Tutor Profile
          </button>
        </div>
      </div>
    </section>
  );
}