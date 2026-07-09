import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@/src/services/authService";
import { toast } from "sonner";

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: {
        name: string;
        image?: string;
      };
    }) => updateUser(id, data),

    onSuccess: () => {
      toast.success("Profile updated successfully");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to update profile"
      );
    },
  });
};