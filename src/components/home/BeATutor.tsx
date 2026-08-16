"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function BeATutor() {
  // 👇 PUT YOUR TUTOR IMAGE URL HERE
  const tutorImage =
    "https://res.cloudinary.com/drvwvre57/image/upload/v1786823039/syful-islam-xTH8nlXEGAg-unsplash_ytaini.jpg";

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid overflow-hidden bg-white lg:grid-cols-2">
        {/* ================= LEFT ================= */}
        <div className="flex flex-col justify-between py-10 pr-8 pl-6 lg:py-14 lg:pr-16">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Share your knowledge
              <br />
              and become a
              <br />
              <span className="text-blue-600">SkillBridge tutor.</span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Turn your skills and experience into meaningful learning.
              Connect with students, teach what you love, and build your
              tutoring journey on your own terms.
            </p>
          </div>

          {/* Bottom content */}
          <div className="mt-16">
            {/* Decorative line */}
            <div className="mb-10 h-px w-44 bg-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(120deg,transparent_0px,transparent_5px,#cbd5e1_5px,#cbd5e1_6px)]" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <p className="mt-5 text-sm text-slate-600 sm:text-base">
              <span className="font-semibold text-slate-900">
                4.9 out of 5 stars
              </span>{" "}
              from 1,000+ tutor reviews
            </p>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative min-h-[560px] lg:min-h-[650px]">
          {/* Image */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={tutorImage}
              alt="SkillBridge tutor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Subtle bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-300/40 via-transparent to-transparent" />
          </div>

          {/* Testimonial */}
          <div className="absolute bottom-7 left-7 right-7 bg-white/95 p-7 shadow-sm backdrop-blur-sm sm:left-10 sm:right-10 sm:bottom-10 sm:p-9">
            <blockquote className="font-serif md:text-lg text-[13px] italic md:leading-8 leading-5 text-slate-700 sm:text-xl">
              “Teaching through SkillBridge has been a wonderful experience.
              I can share what I know while helping students reach their
              goals.”
            </blockquote>

            <div className="mt-7">
              <p className="text-sm font-semibold text-slate-900">
                Shafin Rahman
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Mathematics Tutor, SkillBridge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}