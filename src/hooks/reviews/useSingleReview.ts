import { getSingleReview } from "@/src/services/review.service";
import { useQuery } from "@tanstack/react-query";

export const useSingleReview = (id: string) => {
  return useQuery({
    queryKey: ["review", id],
    queryFn: () => getSingleReview(id),
    enabled: !!id,
  });
};