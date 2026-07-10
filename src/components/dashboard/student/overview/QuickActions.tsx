"use client";

import Link from "next/link";
import {
  Search,
  CalendarDays,
  User,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Search Tutors",
    description: "Find your next tutor",
    href: "/tutors",
    icon: Search,
  },
  {
    title: "My Bookings",
    description: "Manage your sessions",
    href: "/dashboard/Students/mybooking",
    icon: CalendarDays,
  },
  {
    title: "Edit Profile",
    description: "Update your profile",
    href: "/dashboard/Students/editProfile",
    icon: User,
  },

];

export default function QuickActions() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      {/* Header */}

      <div>
        <h2 className="text-xl font-semibold">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Quickly navigate to frequently used pages.
        </p>
      </div>

      {/* Actions */}

      <div className="mt-6 space-y-4">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="group flex items-center justify-between rounded-lg border p-4 transition-all hover:border-primary hover:bg-muted/40"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <action.icon className="h-5 w-5 text-primary" />
              </div>

              <div>
                <h3 className="font-medium">
                  {action.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}