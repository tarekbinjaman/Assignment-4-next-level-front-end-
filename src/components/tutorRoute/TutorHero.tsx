import Image from "next/image";

type Props = {
  tutor: any;
};

export default function TutorHero({ tutor }: Props) {
  // {console.log("Tutor image from tutor hero", tutor)}
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 p-8 text-white shadow-xl">
      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col items-center gap-6 md:flex-row">
        {/* Avatar */}
<div className="relative w-fit border">
  <Image
    src={tutor.user.image || "/default-avatar.png"}
    alt={tutor.user.name}
    width={120}
    height={120}
    className="rounded-full border-4 border-white object-cover"
  />

  <span className="absolute mb-4 bottom-0 right-2 h-5 w-5 z-10 rounded-full border-4 border-green-500 bg-green-500" />
</div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold md:text-4xl">{tutor.user.name}</h1>

          <p className="mt-2 text-blue-100">Professional Tutor</p>

          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {tutor.categories.map((category: any) => (
              <span
                key={category.id}
                className="rounded-full bg-white/15 px-4 py-1.5 text-sm backdrop-blur-md"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>

        {/* Rate */}
        <div className="rounded-2xl bg-white/10 px-6 py-4 text-center backdrop-blur-md">
          <p className="text-sm text-blue-100">Hourly Rate</p>

          <h2 className="mt-1 text-4xl font-bold">${tutor.hourlyRate}</h2>
        </div>
      </div>
    </section>
  );
}
