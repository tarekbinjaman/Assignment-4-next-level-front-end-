"use client";

import { Star, MessageSquare } from "lucide-react";

type ReviewStatsProps = {
  stats: {
    averageRating: number;
    totalReviews: number;
  };
};

export default function ReviewStats({
  stats,
}: ReviewStatsProps) {
  const cards = [
    {
      title: "Average Rating",
      value: (stats.averageRating ?? 0).toFixed(1),
      icon: Star,
      color: "text-yellow-500",
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      title: "Total Reviews",
      value: stats.totalReviews ?? 0,
      icon: MessageSquare,
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  {card.value}
                </h2>
              </div>

              <div
                className={`rounded-2xl p-4 ${card.bg} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className={`h-7 w-7 ${card.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}