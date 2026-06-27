import { getAllTutors } from "@/src/services/tutorService"
import { useQuery } from "@tanstack/react-query"

export const useTutors = (category?: string, sort?:string, search?: string) => {
    return useQuery({
        queryKey:["tutors", category, sort, search],
        queryFn: () => getAllTutors({category, sort, search}),
    });
};