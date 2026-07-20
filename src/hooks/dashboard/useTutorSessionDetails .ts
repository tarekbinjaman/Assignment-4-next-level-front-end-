import { getTutorSessionDetails } from "@/src/services/getTutorSessionDetails";
import { useQuery } from "@tanstack/react-query";

export const useTutorSessionDetails = (id: string) => {
  return useQuery({
    queryKey: ["tutor-session-details", id],
    queryFn: () => getTutorSessionDetails(id),
    enabled: !!id,
  });
};