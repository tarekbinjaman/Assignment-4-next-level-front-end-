"use client";

import { useCategories } from "@/src/hooks/category/useCategories";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

type Props = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;

  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;

  availableDays?: string[]; // ✅ optional to prevent undefined crash
  setAvailableDays: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TutorFilters({
  category,
  setCategory,
  sort,
  setSort,
  availableDays = [], // ✅ safe default
  setAvailableDays,
}: Props) {
  const { data: categories = [] } = useCategories();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Filters</h3>

      {/* Sort */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Sort by Price
        </label>

        <div className="grid grid-cols-2 rounded-lg border bg-gray-50 p-1">
          {[
            { label: "Low → High", value: "price_asc" },
            { label: "High → Low", value: "price_desc" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setSort(option.value)}
              className={`rounded-md px-4 py-2 text-xs font-medium transition-all ${
                sort === option.value
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Subject</label>

        <Popover>
          <PopoverTrigger asChild>
            <button className="w-full rounded-lg border px-4 py-2 text-left text-sm hover:bg-gray-50">
              {category || "Select Subject"}
            </button>
          </PopoverTrigger>

          <PopoverContent className="w-[250px] p-2">
            <div className="space-y-1">
              <button
                onClick={() => setCategory("")}
                className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-gray-100 ${
                  category === "" ? "bg-gray-100 font-medium" : ""
                }`}
              >
                All Subjects
              </button>

              {categories.map((item: any) => (
                <button
                  key={item.id}
                  onClick={() => setCategory(item.name)}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-gray-100 ${
                    category === item.name ? "bg-gray-100 font-medium" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Available Days */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Available Days
        </label>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {days.map((day) => (
            <label
              key={day}
              className="flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={availableDays.includes(day)} // ✅ safe now
                onChange={(e) => {
                  if (e.target.checked) {
                    setAvailableDays([...availableDays, day]);
                  } else {
                    setAvailableDays(
                      availableDays.filter((d) => d !== day)
                    );
                  }
                }}
                className="accent-primary"
              />

              <span>{day}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}