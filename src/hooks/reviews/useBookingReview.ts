import { getBookingReview } from "@/src/services/review.service";
import { useQuery } from "@tanstack/react-query";

export const useBookingReview = (bookingId: string) => {
  return useQuery({
    queryKey: ["bookingReview", bookingId],
    queryFn: () => getBookingReview(bookingId),
    enabled: !!bookingId,
  });
};