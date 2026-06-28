import { getAllTutors } from "@/src/services/tutorService"
import { useQuery } from "@tanstack/react-query"

export const useTutors = (category?: string, sort?:string, search?: string, availableDays?: string[]) => {
    return useQuery({
        queryKey:["tutors", category, sort, search, availableDays],
        queryFn: () => getAllTutors({category, sort, search, availableDays}),
    });
};