import Image from "next/image";
import ReviewStars from "./ReviewStars";

export default function ReviewCard({ review }) {
  return (
    <div className="rounded-xl border bg-white p-6 transition hover:shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Image
            src={review.user.image}
            alt={review.user.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold">
              {review.user.name}
            </h3>

            <p className="text-sm text-gray-500">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <ReviewStars rating={review.rating} />
      </div>

      {review.comment && (
        <p className="mt-4 leading-7 text-gray-600">
          {review.comment}
        </p>
      )}
    </div>
  );
}