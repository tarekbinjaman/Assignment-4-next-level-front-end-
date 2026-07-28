import {
  CalendarDays,
  Clock3,
  Timer,
  Wallet,
  BookOpen,
} from "lucide-react";

export default function BookingSessionCard({ data }) {
  const formattedDate = new Date(data?.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":").map(Number);

    return new Date(0, 0, 0, hour, minute).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Session Details</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Date</p>
            <p className="font-medium">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Time</p>
            <p className="font-medium">
              {formatTime(data?.startTime)} - {formatTime(data?.endTime)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Timer className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Duration</p>
            <p className="font-medium">{data?.duration} Minutes</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Wallet className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Total Price</p>
            <p className="font-medium">${data?.totalPrice}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Subject</p>
            <p className="font-medium">
              {data?.tutor?.categories?.[0]?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}