import Image from "next/image";
import ReviewStars from "./ReviewStars";

export default function ReviewCard({ review }) {
    const name = review.user.name || "User";
  const firstLetter = name.charAt(0).toUpperCase();
  return (
    <div className="rounded-xl bg-white p-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          {/* Avatar */}
          {review.user.image ? (
            <Image
              src={review.user.image}
              alt={name}
              width={45}
              height={45}
              className="h-11 w-11 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
              {firstLetter}
            </div>
          )}

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