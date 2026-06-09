import { deleteAvailability } from "@/src/services/availabilityService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteAvailability = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAvailability,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["availability"],
      });
    },
  });
};

/*
Usage:

const { mutateAsync: removeSlot } =
  useDeleteAvailability();

await removeSlot(id);
*/ 