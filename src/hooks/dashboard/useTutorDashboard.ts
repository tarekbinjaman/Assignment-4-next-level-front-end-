import {
  getTutorDashboard,
  getTutorSessions,
} from "@/src/services/dashboardService";
import { updateTutorSessionsStatus } from "@/src/services/updateTutorSessionsStatus";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type TutorDashboardParams = {
  search?: string;
  status?: string;
  sort?: "asc" | "desc";
  page?: number;
  limit?: number;
  nextPage?: number;
  nextLimit?: number;
};
export const UseTutorDashboard = (
{
  search,
  status,
  sort,
  page = 1,
  limit = 5,
  nextPage = 1,
  nextLimit = 5,
}: TutorDashboardParams = {}
) => {
  return useQuery({
    queryKey: ["tutorDashboard", search, status, sort, page, limit, nextPage, nextLimit],
    queryFn: () => getTutorDashboard(search, status, sort, page, limit, nextPage, nextLimit),
  });
};

export const useTutorSessions = (
  search: string,
  status: string,
  sort: "asc" | "desc",
  page = 1,
  limit = 5,
) => {
  return useQuery({
    queryKey: ["tutorSessions", search, status, sort, page, limit],
    queryFn: () => {
      console.log("Fetching sessions... for all session");
      return getTutorSessions(search, status, sort, page, limit);
    },
  });
};

export const useTutorSessionsByStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      sessionId,
      status,
    }: {
      sessionId: string;
      status: "ACCEPTED" | "CANCELLED" | "COMPLETED";
    }) => updateTutorSessionsStatus(sessionId, status),

    onSuccess: (_, variables) => {
      toast.success("Session status updated successfully");
      console.log("you break me down", variables?.status);
       queryClient.invalidateQueries({ queryKey: ["tutor-session-details", variables?.sessionId] });
       queryClient.invalidateQueries({ queryKey: ["tutorSessions"] });
    },
    
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to update session status",
      );
    },
  });
};
