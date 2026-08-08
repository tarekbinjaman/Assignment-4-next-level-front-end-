import Image from "next/image";
import Link from "next/link";
import { Eye, GraduationCap, Clock3, BookOpen, DollarSign } from "lucide-react";

export default function TutorCard({ tutor }: { tutor: any }) {
 const statusColor =
  tutor.availability?.length > 0 ? "#22c55e" : "#ef4444";
  return (
    <div className="flex flex-col h-full rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md w-sm md:w-[345px] lg:w-[310px] xl:w-[360px]">
      <div className="flex-1">
      <div className="flex items-center gap-4">
        <div className="relative">
        <Image
          src={tutor.user.image || "/default-avatar.png"}
          alt={tutor.user.name}
          width={72}
          height={72}
          className="h-[72px] w-[72px] rounded-full object-cover border"
        />
          <span style={{backgroundColor: statusColor, border: "1.5px solid white",}}
  className="absolute z-50 bottom-0 right-0 mb-2 mr-4 h-4 w-4 border-2 border-white rounded-full" />
        </div>

        <div>
          <h2 className="text-lg font-bold">{tutor.user.name}</h2>

          <p className="text-sm text-gray-500">Tutor</p>
        </div>
      </div>
      {/* hourly rate */}
      <p className="mt-4 text-2xl font-bold text-blue-600">
        ${tutor.hourlyRate}
        <span className="text-sm font-normal text-gray-500">/hour</span>
      </p>
      {/* tutor data */}
      <div className="mt-3 space-y-2 text-sm">
        {/* educational background and experience */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700">
            <GraduationCap className="h-4 w-4 text-gray-500" />
            <span>{tutor.education || "Bachelor"}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Clock3 className="h-4 w-4 text-gray-500" />
            <span>{tutor.experience || "3"}</span>
          </div>
        </div>

        {/* bio */}
        <p className="mt-3 text-xs text-gray-600 line-clamp-3">
          {tutor.bio.slice(0, 100) ||
            "Experienced tutor dedicated to helping students achieve their learning goals."}
          <span>...</span>
        </p>
      </div>

      {/* available time */}
      <div className="mt-6 flex-col items-center justify-between rounded-2xl border bg-slate-50 px-5 py-4">
        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-xl bg-white shadow-sm">
            <Clock3 className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <p className="text-xs text-gray-500 whitespace-nowrap">
              {tutor.availability.length
                ? `${tutor.availability[0].startTime} - ${tutor.availability[0].endTime}`
                : "Not Available"}
            </p>
          </div>
        </div>

        {/* Days */}
        {
          tutor.availability.length > 0 && (

        <div className="flex gap-2 justify-start mt-2">
          {tutor.availability.map((day: any) => (
            <span
              key={day.id}
              className="rounded-md bg-white px-1 py-0.5 text-xs font-semibold text-green-700"
            >
              {day.day.slice(0, 3)}
            </span>
          ))}
        </div>
          )
        }
      </div>
      </div>
      {/* category */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tutor.categories.map((category: any) => (
          <span
            key={category.id}
            className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700"
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
            <span className="text-sm">View Details</span>

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
