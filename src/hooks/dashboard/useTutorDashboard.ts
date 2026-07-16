import { getTutorDashboard } from "@/src/services/dashboardService"
import { useQuery } from "@tanstack/react-query"

export const UseTutorDashboard = () => {
    return useQuery({
        queryKey: ["tutorDashboard"],
        queryFn: getTutorDashboard,
    });
}