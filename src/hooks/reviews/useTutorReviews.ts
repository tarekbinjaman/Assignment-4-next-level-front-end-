import { getTutorReviews } from "@/src/services/review.service";
import { useQuery } from "@tanstack/react-query";

export const useTutorReviews = (tutorId: string, sort: string, search: string, rating: number, page: number,
    limit: number) => {
  return useQuery({
    queryKey: ["tutorReviews", tutorId, sort, search, rating, page, limit],
    queryFn: () => getTutorReviews(tutorId, sort, search, rating, page, limit),
    enabled: !!tutorId,
  });
};