import { BriefcaseBusiness, GraduationCap, Wallet } from "lucide-react";

export default function BookingTutorCard() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Tutor Information</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Education</p>
            <p className="font-medium">PhD</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <BriefcaseBusiness className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Experience</p>
            <p className="font-medium">5 Years</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Wallet className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Hourly Rate</p>
            <p className="font-medium">$53/hr</p>
          </div>
        </div>
      </div>
    </div>
  );
}