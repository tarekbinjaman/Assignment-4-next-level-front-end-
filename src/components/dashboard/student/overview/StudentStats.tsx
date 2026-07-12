"use client";

import {
  CalendarDays,
  CheckCircle2,
  DollarSign,
  Star,
} from "lucide-react";

type StudentStatsProps = {
  stats: {
    upcomingSessions: number;
    completedSessions: number;
    totalSpent: number;
    reviewsGiven: number;
  };
};

export default function StudentStats({
  stats,
}: StudentStatsProps) {
  const cards = [
    {
      title: "Upcoming Sessions",
      value: stats?.upcomingSessions,
      icon: CalendarDays,
    },
    {
      title: "Completed Sessions",
      value: stats?.completedSessions,
      icon: CheckCircle2,
    },
    {
      title: "Total Spent",
      value: `$${stats?.totalSpent}`,
      icon: DollarSign,
    },
    {
      title: "Reviews Given",
      value: stats?.reviewsGiven,
      icon: Star,
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                {card.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {card.value}
              </h2>
            </div>

            <div className="rounded-full bg-primary/10 p-3">
              <card.icon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}