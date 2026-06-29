type Props = {
  tutor: any;
};

export default function TutorAvailability({ tutor }: Props) {
  return (
    <section className="rounded-2xl border bg-white p-8 shadow-sm">
      <h2 className="mb-5 text-2xl font-bold">
        Availability
      </h2>

      <div className="flex flex-wrap gap-3">
        {tutor.availability?.map((availability: any) => (
          <span
            key={availability.id}
            className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100"
          >
            {availability.day}
          </span>
        ))}
      </div>
    </section>
  );
}