"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ayesha Rahman",
    role: "Student",
    image: "", // 👈 PUT IMAGE URL HERE
    rating: 5,
    review:
      "SkillBridge made finding the right tutor so easy. I found someone who understood exactly what I needed help with.",
  },
  {
    name: "Tanvir Hasan",
    role: "Student",
    image: "", // 👈 PUT IMAGE URL HERE
    rating: 5,
    review:
      "I really loved how simple the booking process was. My tutor was professional, friendly, and very helpful.",
  },
  {
    name: "Nusrat Jahan",
    role: "Student",
    image: "", // 👈 PUT IMAGE URL HERE
    rating: 5,
    review:
      "The tutor I found through SkillBridge helped me understand topics that I had struggled with for months.",
  },
  {
    name: "Rakib Ahmed",
    role: "Student",
    image: "", // 👈 PUT IMAGE URL HERE
    rating: 4,
    review:
      "A great platform for finding knowledgeable tutors. The profile and availability information made choosing easy.",
  },
  {
    name: "Sadia Islam",
    role: "Student",
    image: "", // 👈 PUT IMAGE URL HERE
    rating: 5,
    review:
      "I was able to find a tutor that matched my learning style perfectly. The whole experience felt very smooth.",
  },
  {
    name: "Fahim Chowdhury",
    role: "Student",
    image: "", // 👈 PUT IMAGE URL HERE
    rating: 5,
    review:
      "My tutor was incredibly patient and explained everything clearly. I would definitely recommend SkillBridge.",
  },
  {
    name: "Mim Akter",
    role: "Student",
    image: "", // 👈 PUT IMAGE URL HERE
    rating: 5,
    review:
      "What I like most is having different tutors to choose from. I can compare their expertise, rates, and reviews.",
  },
  {
    name: "Arif Hossain",
    role: "Student",
    image: "", // 👈 PUT IMAGE URL HERE
    rating: 4,
    review:
      "SkillBridge gives students a much easier way to connect with tutors and schedule learning sessions.",
  },
];

export default function LearnerReviews() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            What our learners say
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Real experiences from learners who found the right tutor and
            reached their learning goals with SkillBridge.
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex min-h-[280px] flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* User */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-blue-100">
                    {review.image ? (
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-blue-700">
                        {review.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {review.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Small SkillBridge mark */}
                <div className="text-blue-500">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 3L14.2 9.8H21.3L15.55 14L17.75 20.8L12 16.6L6.25 20.8L8.45 14L2.7 9.8H9.8L12 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-6 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-6 text-slate-600">
                {review.review}
              </p>

              {/* Bottom accent */}
              <div className="mt-auto pt-6">
                <div className="h-px w-12 bg-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}