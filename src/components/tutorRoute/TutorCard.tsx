import Image from "next/image";
import Link from "next/link";

export default function TutorCard({
  tutor,
}: {
  tutor: any;
}) {
  return (
    <div className="border rounded-xl p-5 shadow-sm bg-white">
      <div className="flex items-center gap-4">
        <Image
          src={tutor.user.image || "/default-avatar.png"}
          alt={tutor.user.name}
          width={70}
          height={70}
          className="rounded-full object-cover w-[70px] h-[70px]"
        />

        <div>
          <h2 className="text-xl font-bold">
            {tutor.user.name}
          </h2>

          <p className="font-semibold text-blue-600">
            ${tutor.hourlyRate}/hour
          </p>
        </div>
      </div>

      <p className="text-gray-600 mt-4">
        {tutor.bio}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tutor.categories.map((category: any) => (
          <span
            key={category.id}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded"
          >
            {category.name}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mt-5">
        <Link
          href={`/tutors/${tutor.id}`}
          className="btn btn-primary"
        >
          View Details
        </Link>

        <button className="btn btn-outline">
          Book Session
        </button>
      </div>
    </div>
  );
}