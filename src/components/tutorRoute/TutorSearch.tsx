"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function TutorSearch({ value, onChange }: Props) {
  return (
    <div className="">
      <div className="relative w-full ">
        {/* Search icon */}
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search tutors by name..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 shadow-sm transition"
        />
      </div>
    </div>
  );
}