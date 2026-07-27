import { getAllTutors } from "@/src/services/tutorService"
import { useQuery } from "@tanstack/react-query"

export const useTutors = (category?: string, sort?:string, search?: string, availableDays?: string[], page = 1, limit = 10,) => {
    return useQuery({
        queryKey:["tutors", category, sort, search, availableDays, page, limit,],
        queryFn: () => getAllTutors({category, sort, search, availableDays, page, limit}),
    });
};