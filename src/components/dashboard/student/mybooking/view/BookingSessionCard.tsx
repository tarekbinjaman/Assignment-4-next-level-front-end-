import {
  CalendarDays,
  Clock3,
  Timer,
  Wallet,
  BookOpen,
} from "lucide-react";

export default function BookingSessionCard() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Session Details</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Date</p>
            <p className="font-medium">Tuesday, July 28, 2026</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Time</p>
            <p className="font-medium">7:00 AM - 8:00 AM</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Timer className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Duration</p>
            <p className="font-medium">60 Minutes</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Wallet className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Total Price</p>
            <p className="font-medium">$53</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Subject</p>
            <p className="font-medium">Cyber Security</p>
          </div>
        </div>
      </div>
    </div>
  );
}