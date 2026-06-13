"use client";

import Image from "next/image";
import { useAuth } from "@/src/context/AuthContext";

export default function TutorProfileCard() {
  const { user, setEditTutorModal } = useAuth();

  const tutorProfile = user?.tutorProfile;

  if (!tutorProfile) return null;

  return (
    <div className="max-w-4xl mx-auto bg-white border rounded-2xl shadow-sm overflow-hidden">
      {/* Banner */}
      <div className="h-32 bg-gradient-to-r from-gray-900 to-gray-700" />

      {/* Profile */}
      <div className="px-8 pb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <Image
              src={user?.image || "/default-avatar.png"}
              alt="Tutor"
              width={120}
              height={120}
              className="
                w-28
                h-28
                rounded-full
                object-cover
                border-4
                border-white
                -mt-14
                bg-white
              "
            />

            <div>
              <h1 className="text-3xl font-bold">
                {user?.name}
              </h1>

              <p className="text-gray-500">
                {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={() => setEditTutorModal(true)}
            className="
              mt-4 md:mt-0
              bg-black
              text-white
              px-5
              py-2.5
              rounded-xl
              font-medium
              transition
              hover:bg-gray-800
            "
          >
            Edit Profile
          </button>
        </div>

        {/* Bio */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">
            About
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {tutorProfile.bio}
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">
              Hourly Rate
            </p>

            <h3 className="text-2xl font-bold mt-1">
              ${tutorProfile.hourlyRate}
            </h3>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">
              Categories
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {tutorProfile.categories?.length || 0}
            </h3>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">
              Status
            </p>

            <h3 className="text-green-600 font-semibold mt-1">
              Active Tutor
            </h3>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">
            Subjects
          </h2>

          <div className="flex flex-wrap gap-3">
            {tutorProfile.categories?.map((category) => (
              <span
                key={category.id}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-gray-100
                  text-gray-700
                  text-sm
                  font-medium
                "
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}