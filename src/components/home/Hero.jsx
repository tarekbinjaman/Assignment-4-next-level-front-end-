"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="lg:mt-15 xl:mt-10 md:mb-10 mb-0 md:mt-10 mt-10">
      {/* Topographic background */}
      <div
        className="pointer-events-none absolute -top-0 inset-0 h-[700px] opacity-55 sm:h-[750px] lg:h-[600px] xl:h-[700px] md:h-[900px]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/drvwvre57/image/upload/v1786544721/flowity-topo-contours-1786544657616_ibu5uk.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hero content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-8 lg:px-10">
        {/* Left content */}
        <div className="w-full flex-1 lg:w-auto">
          {/* Top label */}
          <div className="flex items-center gap-3 sm:gap-4">
            <p className="shrink-0 text-base text-blue-400 sm:text-lg">
              We are the best
            </p>

            <span className="h-px flex-1 bg-blue-200 sm:mr-20 lg:mr-32" />
          </div>

          {/* Heading */}
          <h1 className="xl:mt-6 lg:mt-2 xl:text-3xl lg:text-[25px] text-2xl mt-3 md:mt-0 font-bold xl:leading-[1.25] lg:leading-8.5 tracking-wide sm:mt-8 sm:text-4xl sm:leading-[1.25] lg:text-4xl">
            Learn From Home <br />
            With
            <span className="text-blue-400"> The Best</span>
            <br />
            Expert Online Tutors by Subject
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl xl:text-sm text-xs leading-6 text-gray-400 sm:mt-8">
            Connect with expert tutors, learn at your own pace, and build the
            skills you need to succeed.
            <br className="hidden sm:block lg:hidden" />
            Find the right tutor for your subject and start learning today.
          </p>

          {/* Button */}
          <Button className="mt-7 bg-blue-400 px-6 sm:mt-8">
            Browse Tutors
          </Button>
        </div>

        {/* Right image */}
        <div className="w-full flex-1 lg:w-auto border md:hidden lg:block hidden">
          <div className="relative mx-auto w-full 2xl:w-[650px] xl:w-[600px] lg:w-[500px]">
            <Image
              src="https://res.cloudinary.com/drvwvre57/image/upload/v1786527948/website_png_zyd5xd.png"
              alt="Hero Image"
              width={700}
              height={420}
              priority
              className="h-auto w-full object-contain lg:ml-10 xl:mr-0"
            />

            {/* Learn from Expert Tutors */}
            <div className="absolute left-0 top-8  xl:w-28 lg:w-28 rounded-2xl border border-white bg-blue-300/20 p-3 backdrop-blur-md sm:-left-4 sm:top-10 sm:w-52 lg:left-12 xl:left-24 lg:top-12">
              <div className="flex items-center gap-3">

                <div>

                  <h2 className="text-[11px] font-bold text-blue-700">
                    Expert Tutors
                  </h2>

                  <p className="text-[8px] leading-3 text-gray-800">
                    Connect with expert tutors
                  </p>
                </div>
              </div>
            </div>

            {/* Top Rated Tutors */}
            <div className="absolute bottom-6 right-0 xl:w-28 lg:w-28 rounded-2xl border border-white/70 bg-white/20 p-3 shadow-lg backdrop-blur-md sm:bottom-10 sm:right-2 sm:w-52 lg:bottom-16 xl:right-24 lg:right-8">


                {/* Content */}
                <div>

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
          </div>
        </div>
      </div>
    </section>
  );
}