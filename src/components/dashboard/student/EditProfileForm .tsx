"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { getMe, updateUser } from "@/src/services/AuthService";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type EditProfileForm = {
  name: string;
  image: string;
};

export default function EditProfile() {
  const queryClient = useQueryClient();

  // Get current logged in user
  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  const user = data?.data;

  // Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditProfileForm>();

  // Fill form with existing data
  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        image: user.image || "",
      });
    }
  }, [user, reset]);

  // Update profile mutation
  const { mutate, isPending } = useMutation({
    mutationFn: (formData: EditProfileForm) =>
      updateUser(user.id, formData),

    onSuccess: () => {
      toast.success("Profile updated successfully!");

      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });

  // Submit
  const onSubmit = (formData: EditProfileForm) => {
    mutate(formData);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto rounded-xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-6">Edit Profile</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Name */}
        <div className="space-y-2">
          <Label>Name</Label>

          <Input
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
            })}
          />

          {errors.name && (
            <p className="text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label>Email</Label>

          <Input
            value={user.email}
            disabled
          />
        </div>

        {/* Profile Image */}
        <div className="space-y-2">
          <Label>Profile Image URL</Label>

          <Input
            placeholder="https://example.com/profile.jpg"
            {...register("image")}
          />
        </div>

        {/* Update Button */}
        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? "Updating..." : "Update Profile"}
        </Button>
      </form>
    </div>
  );
}