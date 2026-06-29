type Props = {
  tutor: any;
};

export default function TutorPricingCard({ tutor }: Props) {
  return (
    <aside className="sticky top-24">
      <div className="rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">


        {/* Availability */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Availability
          </h3>

          <div className="space-y-3">
            {tutor.availability.map((slot: any) => (
              <div
                key={slot.id}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  <span className="font-medium">
                    {slot.day}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  {slot.startTime} - {slot.endTime}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Book Button */}
        <button className="group relative mt-8 flex w-full items-center justify-center overflow-hidden rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          {/* Shine */}
          <span className="absolute left-[-120%] top-0 h-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />

          <span className="relative flex items-center">
            Book Session

            <svg
              className="ml-2 h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M9 7h8v8"
              />
            </svg>
          </span>
        </button>


      </div>
    </aside>
  );
}