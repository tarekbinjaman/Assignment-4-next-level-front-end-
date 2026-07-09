"use client";

import Image from "next/image";
import { LucidePencilLine } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { getMe } from "@/src/services/authService";
import { useUpdateUser } from "@/src/hooks/updateUser/useUpdateUser";
import { useAuth } from "@/src/context/AuthContext";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type EditProfileFormData = {
  name: string;
};

export default function EditProfileForm() {
  const { fetchUser } = useAuth();

  // Current user
  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  const user = data?.data;

  // Update hook
  const { mutateAsync: updateProfile, isPending } = useUpdateUser();

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditProfileFormData>();

  // Local State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("/default-avatar.png");

  // Cloudinary
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  // Fill form
  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
      });

      setPreview(user.image || "/default-avatar.png");
    }
  }, [user, reset]);

  // Image change
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  // Submit
  const onSubmit = async (formData: EditProfileFormData) => {
    try {
      let imageUrl = user.image || "";

      // Upload image only if user selected one
      if (selectedFile) {
        const data = new FormData();

        data.append("file", selectedFile);
        data.append("upload_preset", uploadPreset as string);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: data,
          }
        );

        const uploadData = await res.json();

        imageUrl = uploadData.secure_url;
      }

      await updateProfile({
        id: user.id,
        data: {
          name: formData.name,
          image: imageUrl,
        },
      });

      await fetchUser();

      toast.success("Profile updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    }
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
      <h2 className="text-3xl font-bold mb-8">
        Edit Profile
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-28 h-28 group cursor-pointe">
            <Image
              src={preview}
              alt="Profile"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />

            <div className="absolute inset-0 rounded-full bg-black/40 opacity-20 group-hover:opacity-100 transition" />

            <LucidePencilLine className="absolute inset-0 m-auto text-white opacity-40 group-hover:opacity-100 transition bg-black/10" />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

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

        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </div>
  );
}