"use client";

import { CalendarDays, Clock3, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NextSessionCardProps = {
  session: {
    tutorName: string;
    category: string;
    date: string;
    startTime: string;
    status: string;
  } | null;
};

export default function NextSessionCard({
  session,
}: NextSessionCardProps) {
  if (!session) {
    return (
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold">Next Session</h2>

        <div className="flex flex-col items-center justify-center py-16 text-center">
          <CalendarDays className="h-14 w-14 text-muted-foreground" />

          <h3 className="mt-4 text-lg font-semibold">
            No Upcoming Sessions
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Book a tutor to start learning.
          </p>

          <Button className="mt-6">
           <Link href="/tutors">Browse Tutors</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Next Session
          </h2>

          <p className="text-sm text-muted-foreground mt-1">
            Your upcoming booked lesson.
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          {session.status}
        </span>
      </div>

      {/* Body */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <User className="h-5 w-5 text-primary" />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Tutor
            </p>

            <p className="font-semibold">
              {session.tutorName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <CalendarDays className="h-5 w-5 text-primary" />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Date
            </p>

            <p className="font-semibold">
              {session.date}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <Clock3 className="h-5 w-5 text-primary" />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Time
            </p>

            <p className="font-semibold">
              {session.startTime}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <CalendarDays className="h-5 w-5 text-primary" />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Category
            </p>

            <p className="font-semibold">
              {session.category}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="mt-8 flex justify-end">
        <Button>
          View Booking
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}