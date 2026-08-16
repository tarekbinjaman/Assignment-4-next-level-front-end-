import React from "react";
import Marquee from "react-fast-marquee";

const categories = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "English",
  "Programming",
  "Web Development",
  "Accounting",
  "Biology",
  "IELTS",
  "Business",
];

const BottomMarquee = () => {
  return (
    <div className="relative mb-10 hidden overflow-hidden xl:block lg:block lg:w-11/12 lg:mx-auto xl:w-full rounded-2xl">
      <Marquee speed={60} gradient={false}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="mx-4 rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700"
          >
            {category}
          </div>
        ))}

        {categories.map((category, index) => (
          <div
            key={`duplicate-${index}`}
            className="mx-4 rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700"
          >
            {category}
          </div>
        ))}
      </Marquee>

<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-22 bg-gradient-to-r from-blue-400/40  to-transparent" />

<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-22 bg-gradient-to-l from-blue-400/40 to-transparent" />
    </div>
  );
};

export default BottomMarquee;