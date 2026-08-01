import { createReview, getTutorReviews } from "@/src/services/review.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReview,

    onSuccess: (_, variables) => {
      toast.success("Review submitted successfully!");

      // Refresh this tutor's reviews
      queryClient.invalidateQueries({
        queryKey: ["reviews", variables.bookingId],
      });

      // Refresh completed bookings
      queryClient.invalidateQueries({
        queryKey: ["studentBookings"],
      });
      queryClient.invalidateQueries({
        queryKey: ["booking", variables?.bookingId],
      });
      queryClient.invalidateQueries({
        queryKey: ["bookingReview", variables?.bookingId],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Something went wrong."
      );
    },
  });
};


export const useTutorReviews = (tutorId: string) => {
  return useQuery({
    queryKey: ["reviews", tutorId],
    queryFn: () => getTutorReviews(tutorId),
  });
};