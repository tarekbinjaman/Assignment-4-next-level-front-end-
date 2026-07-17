import { getTutorDashboard, getTutorSessions } from "@/src/services/dashboardService";
import { useQuery } from "@tanstack/react-query";

export const UseTutorDashboard = () => {
  return useQuery({
    queryKey: ["tutorDashboard"],
    queryFn: getTutorDashboard,
  });
};

export const useTutorSessions = (
  search: string,
  status: string,
  sort: string,
) => {
    return useQuery({
        queryKey: ["tutorSessions", search, status, sort],
        queryFn: () => getTutorSessions(search, status, sort),
    })
};
