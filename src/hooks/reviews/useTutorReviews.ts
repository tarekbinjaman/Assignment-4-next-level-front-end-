import { getTutorReviews } from "@/src/services/review.service";
import { useQuery } from "@tanstack/react-query";

export const useTutorReviews = (tutorId: string, sort: string, search: string, rating: number) => {
  return useQuery({
    queryKey: ["tutorReviews", tutorId, sort, search, rating],
    queryFn: () => getTutorReviews(tutorId, sort, search, rating),
    enabled: !!tutorId,
  });
};