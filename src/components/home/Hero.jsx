"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-10">
      <div className="flex">
        <div className="flex-1">
          {/* text data */}
          <div className="flex items-center gap-4">
            <p className="text-lg text-blue-400">We are the best</p>
            <span className="h-px flex-1 bg-blue-200 py-[1px] mr-120" />
          </div>
          <h1 className="text-3xl font-bold leading-10 tracking-wide mt-8">
            Learn From Home <br />
            With
            <span className="text-blue-400"> The Best</span>
            <br />
            Expert Online Tutors by Subject
          </h1>
          <p className="text-sm text-gray-400 mt-8">
            Connect with expert tutors, learn at your own pace, and build the
            skills you need to succeed.
            <br className="hidden md:block" />
            Find the right tutor for your subject and start learning today.
          </p>

          <Button className="bg-blue-400 px-6 mt-8">Browse Tutors</Button>
        </div>

        <div className="flex-1">
          {/* avatar */}
          <div className="relative inline-block">
          <Image
            src="https://res.cloudinary.com/drvwvre57/image/upload/v1786527948/website_png_zyd5xd.png"
            alt="Hero Image"
            width={500}
            height={300}
            className="w-[700px]"
          />
          {/* floating element */}
<div className="absolute -left-8 top-12 w-52 rounded-2xl border border-white bg-blue-300/20 p-3 backdrop-blur-md">
  <div className="flex items-center gap-3">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white bg-blue-200">
      <GraduationCap className="h-5 w-5 text-blue-800" />
    </div>

    <div>
      <p className="text-[8px] font-semibold text-gray-400">
        Learn from
      </p>

      <h2 className="text-[11px] font-bold text-blue-700">
        Expert Tutors
      </h2>

      <p className="text-[8px] leading-3 text-gray-800">
        Connect with expert tutors <br />
        and learn at your own pace.
      </p>
    </div>
  </div>

  <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-500" />
</div>
          {/* Top Rated Tutors floating element */}
<div className="absolute right-8 bottom-16 w-52 rounded-2xl border border-white/70 bg-white/20 p-3 shadow-lg backdrop-blur-md">
  <div className="flex items-center gap-3">
    
    {/* Icon */}
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/80 bg-yellow-100/80">
      <Star
        className="h-5 w-5 fill-yellow-400 text-yellow-500"
        strokeWidth={2}
      />
    </div>

    {/* Content */}
    <div>
      <p className="text-[8px] font-medium text-gray-600">
        Trusted by students
      </p>

      <h2 className="text-[11px] font-bold text-blue-900">
        Top Rated Tutors
      </h2>

      <p className="mt-0.5 text-[8px] leading-3 text-gray-700">
        Learn from highly rated
        <br />
        tutors by students.
      </p>
    </div>
  </div>

  {/* Yellow status dot */}
  <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-yellow-400" />
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
