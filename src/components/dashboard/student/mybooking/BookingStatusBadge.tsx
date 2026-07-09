// components/dashboard/student/BookingStatusBadge.tsx

import { Badge } from "@/components/ui/badge";

export default function BookingStatusBadge({
  status,
}: {
  status: string;
}) {
  switch (status) {
    case "PENDING":
      return <Badge variant="secondary">Pending</Badge>;

    case "ACCEPTED":
      return <Badge className="bg-green-600">Accepted</Badge>;

    case "COMPLETED":
      return <Badge className="bg-blue-600">Completed</Badge>;

    case "CANCELLED":
      return <Badge variant="destructive">Cancelled</Badge>;

    default:
      return <Badge>{status}</Badge>;
  }
}