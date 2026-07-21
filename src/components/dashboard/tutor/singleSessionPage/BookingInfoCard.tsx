"use client";

import {
  CreditCard,
  FileText,
  CalendarClock,
} from "lucide-react";

type Booking = {
  totalPrice: number;
  notes?: string | null;
  createdAt: string;
};

type Props = {
  booking: Booking;
};

export default function BookingInfoCard({ booking }: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-primary/10 p-2 text-primary">
          <CreditCard size={20} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Booking Information
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Details provided during the booking.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">

        <InfoItem
          icon={<CreditCard size={18} />}
          label="Total Price"
          value={`$${booking.totalPrice}`}
        />

        <InfoItem
          icon={<CalendarClock size={18} />}
          label="Booked On"
          value={new Date(booking.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        />

        <InfoItem
          icon={<FileText size={18} />}
          label="Student Notes"
          value={booking.notes || "No notes provided"}
        />

      </div>
    </section>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
      <div className="mb-3 flex items-center gap-2 text-primary">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>

      <p className="text-sm font-semibold text-slate-900 dark:text-white break-words">
        {value}
      </p>
    </div>
  );
}