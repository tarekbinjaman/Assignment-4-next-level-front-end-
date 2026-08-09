"use client";

import { Info, User } from "lucide-react";
import { useState } from "react";

type Props = {
  tutor: any;
};

export default function TutorAbout({ tutor }: Props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white p-8 rounded-2xl border">
      <div className="flex items-center mb-4 gap-2">
      <User className="text-blue-400 bg-blue-100 h-10 w-10 p-2 rounded-full" />
      <h2 className="text-2xl font-bold">About Tutor</h2>
      </div>

      <p
        className={`leading-8 text-gray-600 ${
          !showMore ? "line-clamp-4" : ""
        }`}
      >
        {tutor.bio || "This tutor hasn't added a bio yet."}
      </p>

      {tutor.bio && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-2 font-medium text-blue-600 hover:underline"
        >
          {showMore ? "See less" : "See more"}
        </button>
      )}
    </section>
  );
}