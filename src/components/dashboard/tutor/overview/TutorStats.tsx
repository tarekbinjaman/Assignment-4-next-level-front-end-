"use client";

import {
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  Star,
} from "lucide-react";

type Stats = {
  upcomingSessions: number;
  completedSession: number;
  totalStudent: number;
  averageRatingResult: number;
};

type TutorStatsProps = {
  stats: Stats;
};

const statCards = [
  {
    key: "upcomingSessions",
    title: "Upcoming Sessions",
    icon: CalendarCheck,
    color: "text-blue-600 bg-blue-100",
  },
  {
    key: "completedSession",
    title: "Completed Sessions",
    icon: CheckCircle2,
    color: "text-green-600 bg-green-100",
  },
  {
    key: "totalStudent",
    title: "Total Students",
    icon: GraduationCap,
    color: "text-purple-600 bg-purple-100",
  },
  {
    key: "averageRatingResult",
    title: "Average Rating",
    icon: Star,
    color: "text-yellow-600 bg-yellow-100",
  },
] as const;

export default function TutorStats({ stats }: TutorStatsProps) {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {statCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.key}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  {stats[card.key]}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
              >
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}