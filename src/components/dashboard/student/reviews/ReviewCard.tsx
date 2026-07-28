"use client";

import Image from "next/image";
import { Star, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

type ReviewCardProps = {
  review: {
    id: string;
    rating: number;
    comment: string;
    createdAt: string;
    user: {
      name: string;
      image: string;
    };
  };
  onEdit: () => void;
};

export default function ReviewCard({
  review,
  onEdit,
}: ReviewCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        {/* User */}
        <div className="flex items-center gap-4">
          <Image
            src={review.user.image}
            alt={review.user.name}
            width={56}
            height={56}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold">{review.user.name}</h3>

            <p className="text-sm text-muted-foreground">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={onEdit}
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </div>

      {/* Rating */}
      <div className="mt-5 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < review.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}

        <span className="ml-2 text-sm font-medium text-muted-foreground">
          {review.rating}/5
        </span>
      </div>

      {/* Comment */}
      <div className="mt-5 rounded-lg bg-muted/40 p-4">
        <p className="leading-7 text-muted-foreground">
          {review.comment}
        </p>
      </div>
    </div>
  );
}