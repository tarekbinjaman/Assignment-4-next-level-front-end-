import Image from "next/image";

type Props = {
  review: {
    id: string;
    rating: number;
    comment: string;
    createdAt: string;
    student: {
      name: string;
      image?: string;
    };
  };
};

export default function TutorReviewCard({ review }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Image
          src={review.student.image || "/default-avatar.png"}
          alt={review.student.name}
          width={52}
          height={52}
          className="h-13 w-13 rounded-full border object-cover"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">
            {review.student.name}
          </h3>

          <div className="mt-1 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                className={`h-4 w-4 ${
                  index < review.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <span className="text-sm text-gray-400">
          {new Date(review.createdAt).toLocaleDateString()}
        </span>
      </div>

      {/* Review */}
      <p className="mt-5 leading-7 text-gray-600">
        "{review.comment}"
      </p>
    </div>
  );
}