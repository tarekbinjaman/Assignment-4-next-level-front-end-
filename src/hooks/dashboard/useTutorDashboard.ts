import { getTutorDashboard } from "@/src/services/dashboardService"
import { useQuery } from "@tanstack/react-query"

export const UseTutorDashboard = ({ search, status, sort }: { search: string; status: string; sort: string }) => {
    return useQuery({
        queryKey: ["tutorDashboard", search, status, sort],
        queryFn: () => getTutorDashboard(search, status, sort),
    });
}