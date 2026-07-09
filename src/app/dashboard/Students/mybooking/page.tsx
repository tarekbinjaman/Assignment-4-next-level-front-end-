"use client";

import BookingCard from "@/src/components/dashboard/student/mybooking/BookingCard";
import { useMybooking } from "@/src/hooks/booking/useMybooking";

export default function MyBookingsPage() {
  const { data, isLoading } = useMybooking();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const bookings = data?.data || [];

  if (bookings.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">
          No bookings yet
        </h2>

        <p className="text-muted-foreground mt-2">
          Book your first tutor session.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          My Bookings
        </h1>

        <p className="text-muted-foreground">
          Manage all your booked sessions.
        </p>
      </div>

      <div className="grid gap-6">
        {bookings.map((booking: any) => (
          <BookingCard
            key={booking.id}
            booking={booking}
          />
        ))}
      </div>
    </div>
  );
}