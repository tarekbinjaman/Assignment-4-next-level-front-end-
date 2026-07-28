import { getTutorReviews } from "@/src/services/review.service";
import { useQuery } from "@tanstack/react-query";

export const useTutorReviews = (tutorId: string) => {
  return useQuery({
    queryKey: ["tutorReviews", tutorId],
    queryFn: () => getTutorReviews(tutorId),
    enabled: !!tutorId,
  });
};