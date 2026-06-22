import Image from "next/image";
import Link from "next/link";

export default function TutorCard({
  tutor,
}: {
  tutor: any;
}) {
  return (
    <div className="flex flex-col h-full rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md w-sm md:w-[320px] lg:w-[310px]">
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

      <div className="mt-auto pt-6 flex gap-3">
        <Link
          href={`/tutors/${tutor.id}`}
          className="btn btn-primary flex-1"
        >
          View Details
        </Link>

        <button className="btn btn-outline flex-1">
          Book Session
        </button>
      </div>
    </div>
  );
}