import {
  GraduationCap,
  Clock3,
  DollarSign,
  BookOpen,
} from "lucide-react";

interface Props {
  tutor: any;
}

export default function TutorStats({ tutor }: Props) {
  const stats = [
    {
      icon: GraduationCap,
      label: "Education",
      value: tutor.education || "Not specified",
      bgClass: "bg-blue-100",
    },
    {
      icon: Clock3,
      label: "Experience",
      value:
        tutor.experience !== null
          ? `${tutor.experience} years`
          : "Not specified",
      bgClass: "bg-green-100",
    },
    {
      icon: DollarSign,
      label: "Hourly Rate",
      value: `$${tutor.hourlyRate}/hr`,
      bgClass: "bg-yellow-100",
    },
    {
      icon: BookOpen,
      label: "Subjects",
      value: `${tutor.categories.length} ${
        tutor.categories.length === 1 ? "Category" : "Categories"
      }`,
      bgClass: "bg-purple-100",
    },
  ];

  return (
    <section className="rounded-xl border bg-white mt-10 py-4">
      <div className="grid grid-cols-2 gap-6 p-6 md:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
      <div
        key={item.label}
        className={`
          flex items-center gap-3
          ${index % 2 === 0 ? "border-r-2" : ""}
          border-gray-100
          md:border-r-2
          md:last:border-r-0 md:pr-1 lg:pr-0
        `}
      >
              <div className={`rounded-full ${item.bgClass} p-3`}>
                <Icon className="size-5 text-cyan-600" />
              </div>

              <div>
                <p className="lg:text-md md:text-base text-sm text-gray-400">
                  {item.label}
                </p>

                <h3 className="font-semibold text-gray-900 lg:text-lg">
                  {item.value}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}