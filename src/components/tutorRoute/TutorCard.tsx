import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";


export default function TutorCard({
  tutor,
}: {
  tutor: any;
}) {
  return (
    <div className="flex flex-col h-full rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md w-sm md:w-[345px] lg:w-[310px] xl:w-[360px]">
      <div className="flex items-center gap-4">
        <Image
          src={tutor.user.image || "/default-avatar.png"}
          alt={tutor.user.name}
          width={72}
          height={72}
          className="h-[72px] w-[72px] rounded-full object-cover border"
        />

        <div>
          <h2 className="text-lg font-bold">
            {tutor.user.name}
          </h2>

          <p className="text-sm text-gray-500">
            Tutor
          </p>
        </div>
      </div>

      <p className="mt-4 text-2xl font-bold text-blue-600">
        ${tutor.hourlyRate}
        <span className="text-sm font-normal text-gray-500">
          /hour
        </span>
      </p>

      <p className="mt-3 text-gray-600 line-clamp-3 min-h-[72px]">
        {tutor.bio || "Experienced tutor dedicated to helping students achieve their learning goals."}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tutor.categories.map((category: any) => (
          <span
            key={category.id}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {category.name}
          </span>
        ))}
      </div>

<div className="mt-auto pt-6">
<Link
  href={`/tutors/${tutor.id}`}
  className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-slate-900 px-5 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  {/* Shine */}
  <span className="absolute left-[-120%] top-0 h-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />

  {/* Content */}
  <span className="relative flex items-center gap-2">
    <span className="text-sm">
    View Details
    </span>

<svg
  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M7 17L17 7M9 7h8v8"
  />
</svg>
  </span>
</Link>
</div>
    </div>
  );
}