import { updateReview } from "@/src/services/review.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      bookingId,
      tutorId,
      data,
    }: {
      id: string;
      bookingId: string;
      tutorId: string;
      data: any;
    }) => updateReview(id, data),

    onSuccess: (_, variables) => {
      // Single booking review
      queryClient.invalidateQueries({
        queryKey: ["bookingReview", variables.bookingId],
      });

      // Tutor review list
      queryClient.invalidateQueries({
        queryKey: ["reviews", variables.tutorId],
      });
            queryClient.invalidateQueries({
        queryKey: ["booking", variables?.bookingId],
      });
      // Single review (if used anywhere)
      queryClient.invalidateQueries({
        queryKey: ["review", variables.id],
      });
    },
  });
};
