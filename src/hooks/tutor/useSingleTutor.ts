import { getSingleTutorProfile } from "@/src/services/tutorService"
import { useQuery } from "@tanstack/react-query"

export const useSingleTutor = (id?: string) => {
    return useQuery({
        queryKey: ["tutor", id],
        queryFn: () => getSingleTutorProfile(id),
        enabled: !!id,
    });
};