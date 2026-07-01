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
    },
    {
      icon: Clock3,
      label: "Experience",
      value:
        tutor.experience !== null
          ? `${tutor.experience} years`
          : "Not specified",
    },
    {
      icon: DollarSign,
      label: "Hourly Rate",
      value: `$${tutor.hourlyRate}/hr`,
    },
    {
      icon: BookOpen,
      label: "Subjects",
      value: `${tutor.categories.length} ${
        tutor.categories.length === 1 ? "Category" : "Categories"
      }`,
    },
  ];

  return (
    <section className="rounded-xl border bg-white mt-10">
      <div className="grid grid-cols-2 gap-6 p-6 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-3"
            >
              <div className="rounded-full bg-cyan-50 p-3">
                <Icon className="size-5 text-cyan-600" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {item.label}
                </p>

                <h3 className="font-semibold text-gray-900">
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