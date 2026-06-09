import { createAvailability } from "@/src/services/availabilityService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateAvailability = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAvailability,

    onSuccess: () => {
      queryClient.invalidateQueries({ // queryClient.invalidateQueries means the data under "availability" key is old. fetch new one.
        queryKey: ["availability"],
      });
    },
  });
};



/*
Usage:

const { mutateAsync: createSlot } = useCreateAvailability();

await createSlot({
  tutorId,
  day,
  startTime,
  endTime,
});

No need for:

refetch();

because TanStack Query automatically refetches after invalidation.
*/ 