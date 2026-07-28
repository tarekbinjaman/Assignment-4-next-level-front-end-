import { StickyNote } from "lucide-react";

export default function BookingNotesCard({data}) {
  const notes =
    "I want to learn web development!";

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <StickyNote className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Notes</h2>
      </div>

      <div className="rounded-lg bg-muted/40 p-4">
        {data ? (
          <p className="leading-7 text-muted-foreground">
            {data}
          </p>
        ) : (
          <p className="italic text-muted-foreground">
            No notes provided.
          </p>
        )}
      </div>
    </div>
  );
}
