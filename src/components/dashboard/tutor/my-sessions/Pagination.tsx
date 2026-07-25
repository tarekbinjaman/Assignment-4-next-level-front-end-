"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
      {/* Previous */}
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
      >
        <ChevronLeft size={16} />
        Previous
      </button>

      {/* Page Numbers */}
      {pages.map((item) => (
        <button
          key={item}
          onClick={() => onPageChange(item)}
          className={`h-10 w-10 rounded-xl text-sm font-semibold transition ${
            page === item
              ? "bg-primary text-white shadow-md"
              : "border border-slate-300 bg-white hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
          }`}
        >
          {item}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
      >
        Next
        <ChevronRight size={16} />
      </button>
    </div>
  );
}