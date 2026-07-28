import Link from "next/link";
import { ArrowRight, Star, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingActions() {
  const status = "PENDING";

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Actions</h2>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild className="flex-1">
          <Link href="/tutors/85624deb-33de-4dd5-b801-78f479b01914">
            View Tutor Profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        {status === "PENDING" && (
          <Button
            variant="destructive"
            className="flex-1"
          >
            <XCircle className="mr-2 h-4 w-4" />
            Cancel Booking
          </Button>
        )}

        {status === "COMPLETED" && (
          <Button className="flex-1">
            <Star className="mr-2 h-4 w-4" />
            Leave Review
          </Button>
        )}
      </div>
    </div>
  );
}