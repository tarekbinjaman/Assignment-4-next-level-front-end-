import { updateReview } from "@/src/services/review.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateReview(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });

      queryClient.invalidateQueries({
        queryKey: ["review", variables.id],
      });
    },
  });
};