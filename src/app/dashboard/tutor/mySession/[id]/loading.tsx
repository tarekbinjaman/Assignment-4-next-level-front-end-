export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">

      <div className="h-10 w-52 rounded bg-slate-200" />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-64 rounded-3xl bg-slate-200" />
        <div className="h-64 rounded-3xl bg-slate-200" />
      </div>

      <div className="h-52 rounded-3xl bg-slate-200" />

      <div className="h-32 rounded-3xl bg-slate-200" />

    </div>
  );
}