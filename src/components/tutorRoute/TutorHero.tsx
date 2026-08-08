import Image from "next/image";

type Props = {
  tutor: any;
};

export default function TutorHero({ tutor }: Props) {
  {console.log("Tutor image from tutor hero", tutor)}
const statusColor =
  tutor.availability?.length > 0 ? "#22c55e" : "#ef4444";  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 p-8 text-white shadow-xl">
      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col items-center gap-6 md:flex-row">
        {/* Avatar */}
<div className="relative rounded-full">
        <Image
          src={tutor.user.image || "/default-avatar.png"}
          alt={tutor.user.name}
          width={120}
          height={120}
          className="h-[120px] w-[120px] rounded-full object-cover"
        />

  {/* <span className="absolute mb-2 bottom-0 right-2 p-4 z-20 rounded-full bg-green-700 border border-white" /> */}
  <span style={{backgroundColor: statusColor, border: "1.5px solid white",}}
  className="absolute z-50 bottom-0 right-0 mb-4 mr-4 h-4 w-4 border-2 border-white rounded-full" />
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