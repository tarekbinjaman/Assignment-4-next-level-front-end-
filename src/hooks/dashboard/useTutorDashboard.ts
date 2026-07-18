import { getTutorDashboard, getTutorSessions } from "@/src/services/dashboardService";
import { updateTutorSessionsStatus } from "@/src/services/updateTutorSessionsStatus";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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
onSuccess: () => {
  toast.success("Session status updated successfully");
  queryClient.invalidateQueries({ queryKey: ["tutorSessions"] });
  queryClient.invalidateQueries({ queryKey: ["tutorDashboard"] });
},
onError: (error: any) => {
  toast.error(error?.response?.data?.message || "Failed to update session status");
},
});
};