import {
  getTutorDashboard,
  getTutorSessions,
} from "@/src/services/dashboardService";
import { updateTutorSessionsStatus } from "@/src/services/updateTutorSessionsStatus";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const UseTutorDashboard = (
  search?: string,
  status?: string,
  sort?: "asc" | "desc",
  page = 1,
  limit = 5,
) => {
  return useQuery({
    queryKey: ["tutorDashboard", search, status, sort, page, limit],
    queryFn: () => getTutorDashboard(search, status, sort, page, limit),
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
      console.log("Fetching sessions...");
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
       queryClient.invalidateQueries({ queryKey: ["tutor-session-details","tutorSessions", variables?.sessionId] });
       queryClient.invalidateQueries({ queryKey: ["tutorSessions"] });
    },
    
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to update session status",
      );
    },
  });
};
