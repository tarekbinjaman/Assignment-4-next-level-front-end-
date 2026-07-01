import { createReview } from "@/src/services/review.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });
    },
  });
};