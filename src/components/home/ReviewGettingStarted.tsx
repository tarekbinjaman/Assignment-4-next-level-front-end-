"use client";

import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  Check,
  Clock3,
  MessageSquare,
  Star,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function ReviewGettingStarted() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />

      {/* Main container */}
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            <Star className="h-4 w-4" />
            Review your session
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Share your{" "}
            <span className="text-blue-500">learning experience.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
            Finished your session? Leave a review in just a few simple steps
            and help other students find the right tutor.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-500">01</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                <Check className="h-5 w-5" />
              </div>
            </div>

            {/* Mini UI */}
            <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-5">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/70 blur-2xl" />

              <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Session
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Graphic Design
                    </p>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-slate-50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">
                      Status
                    </span>

                    <span className="rounded-full bg-green-50 px-2 py-1 text-[9px] font-semibold text-green-600">
                      Completed
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <Clock3 className="h-3 w-3 text-blue-500" />

                    <span className="text-[10px] font-medium text-slate-600">
                      3:00 PM — 4:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Complete Your Session
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Finish your booked learning session with your tutor and make the
              most of your time together.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-500">02</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                <CalendarCheck className="h-5 w-5" />
              </div>
            </div>

            {/* Mini UI */}
            <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-5">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      My Bookings
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Your learning sessions
                    </p>
                  </div>

                  <BookOpen className="h-4 w-4 text-blue-500" />
                </div>

                <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <CalendarCheck className="h-4 w-4 text-blue-500" />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold text-slate-800">
                        Graphic Design
                      </p>

                      <p className="mt-1 text-[9px] text-slate-400">
                        July 29, 2026
                      </p>
                    </div>

                    <span className="ml-auto rounded-full bg-blue-50 px-2 py-1 text-[9px] font-semibold text-blue-600">
                      Completed
                    </span>
                  </div>

                  <div className="mt-3 flex justify-end">
                    <span className="rounded-lg bg-slate-900 px-3 py-1 text-[9px] font-semibold text-white">
                      View
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Open Your Booking
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Go to My Booking from your dashboard and find the session you
              have completed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-500">03</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                <MessageSquare className="h-5 w-5" />
              </div>
            </div>

            {/* Mini UI */}
            <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-5">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-blue-500" />

                  <p className="text-xs font-bold text-slate-800">
                    Review
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-[10px] font-medium text-slate-500">
                    Rating
                  </p>

                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= 4
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-[10px] font-medium text-slate-500">
                    Your comment
                  </p>

                  <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
                    <p className="text-[9px] leading-4 text-slate-400">
                      Very good session. Recommend it!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Leave Your Review
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Open the completed booking and scroll to the bottom to share your
              rating and experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-500">04</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                <Star className="h-5 w-5" />
              </div>
            </div>

            {/* Mini UI */}
            <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 p-5">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Review Submitted
                    </p>

                    <p className="text-[9px] text-slate-400">
                      Thanks for your feedback!
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-slate-50 p-3 text-center">
                  <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="mt-2 text-[9px] text-slate-400">
                    Your feedback helps other students.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Share Your Experience
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Rate your tutor and leave a helpful comment to help other
              students make better choices.
            </p>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center text-center">
          <p className="text-lg font-semibold text-slate-900">
            Ready to share your experience?
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Your feedback can help other students find the right tutor.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="/dashboard/bookings">My Bookings</Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/tutors">Find a Tutor</Link>
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}