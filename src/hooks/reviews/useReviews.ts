import { getAllReviews } from "@/src/services/review.service";
import { useQuery } from "@tanstack/react-query";

export const useReviews = () => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: getAllReviews,
  });
};