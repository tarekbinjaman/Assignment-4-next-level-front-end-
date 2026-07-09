// components/dashboard/student/BookingCard.tsx

import Image from "next/image";
import BookingStatusBadge from "./BookingStatusBadge";

export default function BookingCard({ booking }: any) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <Image
            src={booking.tutor.user.image}
            alt={booking.tutor.user.name}
            width={70}
            height={70}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-lg">
              {booking.tutor.user.name}
            </h3>

            <p className="text-muted-foreground">
              {booking.tutor.categories
                .map((c: any) => c.name)
                .join(", ")}
            </p>
          </div>
        </div>

        <BookingStatusBadge status={booking.status} />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <p className="text-sm text-muted-foreground">Date</p>
          <p>{new Date(booking.date).toLocaleDateString()}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Time</p>
          <p>
            {booking.startTime} - {booking.endTime}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Duration</p>
          <p>{booking.duration} Minutes</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Price</p>
          <p>${booking.totalPrice}</p>
        </div>
      </div>

      {booking.notes && (
        <div className="mt-5">
          <p className="text-sm text-muted-foreground">
            Notes
          </p>

          <p>{booking.notes}</p>
        </div>
      )}
    </div>
  );
}