import { getStudentDashboard } from "@/src/services/dashboardService"
import { useQuery } from "@tanstack/react-query"

export const useStudentDashboard = () => {
    return useQuery({
        queryKey: ["student-dashboard"],
        queryFn: getStudentDashboard,
    });
};