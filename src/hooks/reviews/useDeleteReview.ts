import { deleteReview } from "@/src/services/review.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReview,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });
    },
  });
};