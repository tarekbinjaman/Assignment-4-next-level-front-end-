import { getAllTutors } from "@/src/services/tutorService"
import { useQuery } from "@tanstack/react-query"

export const useTutors = (category?: string, sort?:string) => {
    return useQuery({
        queryKey:["tutors", category, sort],
        queryFn: () => getAllTutors({category, sort}),
    });
};