import { updateAvailability } from "@/src/services/availabilityService";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useUpdateAvailability = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id, data}: {id: string; data: {day?: string; startTime: string; endTime: string;}}) => (
            updateAvailability(id, data)
        ),
    
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["availability"]
            })
        }
    })
}

/*
Usage:

const { mutateAsync: updateSlot } =
  useUpdateAvailability();

await updateSlot({
  id: availabilityId,
  data: {
    day: "MONDAY",
    startTime: "10:00",
    endTime: "12:00",
  },
});

*/ 