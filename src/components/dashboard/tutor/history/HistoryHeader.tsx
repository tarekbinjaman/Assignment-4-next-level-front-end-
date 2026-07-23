import { History } from "lucide-react";

export default function HistoryHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary/10 p-3">
            <History className="text-primary" size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Session History
            </h1>

            <p className="mt-1 text-slate-500">
              View all completed and cancelled tutoring sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}