"use client";

import Image from "next/image";
import {
  Search,
  CalendarCheck,
  ShieldCheck,
  Star,
} from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "Find the Right Tutor",
    description:
      "Discover tutors based on their expertise, availability, ratings, and hourly rate.",
  },
  {
    icon: CalendarCheck,
    title: "Book with Ease",
    description:
      "Choose a convenient date and available time slot, then book your session in a few clicks.",
  },
  {
    icon: ShieldCheck,
    title: "Learn with Confidence",
    description:
      "Explore tutor profiles, reviews, and ratings before making your choice.",
  },
  {
    icon: Star,
    title: "Learn from the Best",
    description:
      "Connect with passionate tutors who are ready to help you reach your learning goals.",
  },
];

export default function WhySkillBridge() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT ================= */}
          <div>
            {/* Small label */}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why SkillBridge?
            </p>

            {/* Heading */}
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Learning made
              <span className="text-blue-600"> simpler.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Everything you need to find the right tutor, book your sessions,
              and make meaningful progress on your learning journey.
            </p>

            {/* Benefits */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                  >
                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-base font-semibold text-slate-900">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative">
            {/* Blue glow behind image */}
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-blue-100/60 blur-2xl" />

            {/* Image */}
            <div className="relative min-h-[580px] overflow-hidden rounded-[2rem] bg-slate-950">
              <Image
                src="https://res.cloudinary.com/drvwvre57/image/upload/v1786829862/noman-khan-cjZf3PD0fQQ-unsplash_cphij1.jpg"
                alt="SkillBridge tutor"
                fill
                priority={false}
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Subtle blue overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/90 p-5 shadow-lg backdrop-blur-sm">
                <p className="text-sm font-medium text-slate-500">
                  Connect. Learn. Grow.
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-900">
                  Your learning journey starts here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}