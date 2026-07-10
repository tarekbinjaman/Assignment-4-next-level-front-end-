"use client";

import { Trophy } from "lucide-react";

type LearningProgressProps = {
  completedSessions: number;
  totalSessions: number;
};

export default function LearningProgress({
  completedSessions,
  totalSessions,
}: LearningProgressProps) {
  const percentage =
    totalSessions === 0
      ? 0
      : Math.round((completedSessions / totalSessions) * 100);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="flex items-center gap-3">
        <div className="rounded-full bg-primary/10 p-3">
          <Trophy className="h-5 w-5 text-primary" />
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Learning Progress
          </h2>

          <p className="text-sm text-muted-foreground">
            Keep learning consistently.
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Progress
          </span>

          <span className="font-semibold">
            {percentage}%
          </span>
        </div>

        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg border p-4 text-center">
            <p className="text-2xl font-bold">
              {completedSessions}
            </p>

            <p className="text-sm text-muted-foreground">
              Completed
            </p>
          </div>

          <div className="rounded-lg border p-4 text-center">
            <p className="text-2xl font-bold">
              {totalSessions}
            </p>

            <p className="text-sm text-muted-foreground">
              Total Sessions
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          You've completed{" "}
          <span className="font-semibold text-foreground">
            {completedSessions}
          </span>{" "}
          out of{" "}
          <span className="font-semibold text-foreground">
            {totalSessions}
          </span>{" "}
          sessions.
        </p>
      </div>
    </div>
  );
}