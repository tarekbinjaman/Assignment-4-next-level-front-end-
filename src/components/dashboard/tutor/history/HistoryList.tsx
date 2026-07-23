import HistoryCard from "./HistoryCard";

type Session = {
  id: string;
  studentName: string;
  studentImage?: string;
  category: string;
  date: string;
  startTime: string;
  endTime: string;
  status: "COMPLETED" | "CANCELLED";
};

type Props = {
  sessions: Session[];
};

export default function HistoryList({ sessions }: Props) {
  if (!sessions.length) {
    return (
      <div className="rounded-3xl border bg-white p-10 text-center shadow-sm dark:bg-slate-900">
        <h2 className="text-xl font-semibold">
          No History Found
        </h2>

        <p className="mt-2 text-slate-500">
          Completed or cancelled sessions will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {sessions.map((session) => (
        <HistoryCard
          key={session.id}
          session={session}
        />
      ))}
    </div>
  );
}