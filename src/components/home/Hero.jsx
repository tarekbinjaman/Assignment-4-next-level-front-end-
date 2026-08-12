"use client";

import { Button } from "@/components/ui/button";

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
          <h1>Hero data</h1>
        </div>
      </div>
    </section>
  );
}
