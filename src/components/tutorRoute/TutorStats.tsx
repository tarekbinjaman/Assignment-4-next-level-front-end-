type Props = {
  tutor: any;
};

export default function TutorStats({ tutor }: Props) {
  const stats = [
    {
      title: "Categories",
      value: tutor.categories.length,
    },
    {
      title: "Available Days",
      value: tutor.availability.length,
    },
    {
      title: "Rate",
      value: `$${tutor.hourlyRate}/hr`,
    },
  ];

  return (
    <section className="mt-8 grid gap-5 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-sm text-gray-500">
            {stat.title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {stat.value}
          </h3>
        </div>
      ))}
    </section>
  );
}