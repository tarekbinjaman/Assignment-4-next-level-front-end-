type Props = {
  tutor: any;
};

export default function TutorAbout({ tutor }: Props) {
  return (
    <section className="rounded-2xl border bg-white p-8 shadow-sm h-[238px] overflow-y-scroll">
      <h2 className="mb-4 text-2xl font-bold">
        About Tutor
      </h2>

      <p className="leading-8 text-gray-600">
        {tutor.bio ||
          "This tutor hasn't added a bio yet."}
      </p>
    </section>
  );
}