import { getAvailableSlots } from "@/src/services/bookingService"
import { useQuery } from "@tanstack/react-query"

export const useAvailableSlots = (tutorId: string, date: string) => {
    return useQuery({
        queryKey: ["available-slots", tutorId, date],
        queryFn: () => getAvailableSlots(tutorId, date),
        enabled: !!tutorId && !!date,
    });
};