"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

type Booking = {
  id: string;
  tutorName: string;
  category: string;
  date: string;
  time: string;
  status: "PENDING" | "ACCEPTED" | "COMPLETED" | "CANCELLED";
};

type RecentBookingsProps = {
  bookings: Booking[];
};

export default function RecentBookings({
  bookings,
}: RecentBookingsProps) {
  const getStatusColor = (status: Booking["status"]) => {
    switch (status) {
      case "ACCEPTED":
        return "bg-green-100 text-green-700";

      case "PENDING":
        return "bg-yellow-100 text-yellow-700";

      case "COMPLETED":
        return "bg-blue-100 text-blue-700";

      case "CANCELLED":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (bookings.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold">
          Recent Bookings
        </h2>

        <div className="flex flex-col items-center justify-center py-12">
          <CalendarDays className="h-12 w-12 text-muted-foreground" />

          <p className="mt-4 text-muted-foreground">
            No bookings found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Recent Bookings
        </h2>

        <Button
          variant="ghost"
          size="sm"
        >
          View All

          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Booking List */}

      <div className="mt-6 space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center justify-between rounded-lg border p-4 transition hover:bg-muted/40"
          >
            {/* Left */}

            <div>
              <h3 className="font-semibold">
                {booking.tutorName}
              </h3>

              <p className="text-sm text-muted-foreground">
                {booking.category}
              </p>

              <p className="mt-2 text-sm">
                {booking.date} • {booking.time}
              </p>
            </div>

            {/* Right */}

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(
                booking.status
              )}`}
            >
              {booking.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}