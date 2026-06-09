import { getAvailability } from "@/src/services/availabilityService"
import { useQuery } from "@tanstack/react-query"

export const useMyAvailability = () => {
    return useQuery({
        queryKey: ["availability"],
        queryFn: getAvailability,
    });
};

/**
 * Then use it:
const {
  data: availability = [],
  isLoading,
  error,
  refetch,
} = u

Now you get:

availability
isLoading
error
refetch()


 * */ 