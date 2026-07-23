"use client";

type Props = {
  search: string;
  setSearch: (value: string) => void;

  sort: "asc" | "desc";
  setSort: (value: "asc" | "desc") => void;
};

export default function HistoryFilters({
  search,
  setSearch,
  sort,
  setSort,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-5 shadow-sm dark:bg-slate-900">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search student..."
          className="rounded-xl border px-4 py-3 outline-none focus:border-primary"
        />

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value as "asc" | "desc")
          }
          className="rounded-xl border px-4 py-3 outline-none focus:border-primary"
        >
          <option value="desc">Newest First</option>

          <option value="asc">Oldest First</option>
        </select>
      </div>
    </div>
  );
}