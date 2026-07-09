import { getMybooking } from "@/src/services/bookingService"
import { useQuery } from "@tanstack/react-query"

export const useMybooking = () => {
    return useQuery({
        queryKey: ["my-booking"],
        queryFn: getMybooking,
    });
};