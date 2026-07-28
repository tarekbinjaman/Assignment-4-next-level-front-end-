import { getSingleBooking } from "@/src/services/bookingService";
import { useQuery } from "@tanstack/react-query";

export const useSingleBooking = (id: string) => {
  return useQuery({
    queryKey: ["booking", id],
    queryFn: () => getSingleBooking(id),
    enabled: !!id,
  })};