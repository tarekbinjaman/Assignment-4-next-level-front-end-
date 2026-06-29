type Props = {
  tutor: any;
};

export default function TutorCategories({ tutor }: Props) {
  return (
    <section className="rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
      <h2 className="mb-5 text-2xl font-bold">
        Teaching Categories
      </h2>

      <div className="flex flex-wrap gap-3">
        {tutor.categories.map((category: any) => (
          <span
            key={category.id}
            className="rounded-full bg-blue-50 px-4 py-2 font-medium text-blue-700"
          >
            {category.name}
          </span>
        ))}
      </div>
    </section>
  );
}