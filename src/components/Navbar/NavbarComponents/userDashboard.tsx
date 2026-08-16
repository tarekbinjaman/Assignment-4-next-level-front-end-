"use client";

import { useAuth } from "@/src/context/AuthContext";
import {
  UserIcon,
  CalendarCheckIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  Clock3Icon,
  Settings2Icon,
  StarIcon,
  HistoryIcon,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import { logOutUser } from "@/src/services/authService";

export default function UserDashboard() {
  const { user, clearAuth } = useAuth();
  const router = useRouter();

  const logOutFunction = async () => {
    await logOutUser();
    clearAuth();
    router.push("/login");
  };

  const userNavigation = (route) => {
    router.push(route);
  };

  const isTutor = user?.role === "TUTOR";

  const tutorRoutes = {
    overview: "/dashboard/tutor/dashboardOverview",
    profile: "/dashboard/tutor/editProfile",
    sessions: "/dashboard/tutor/mySession",
    availability: "/dashboard/tutor/setAvailability",
    reviews: "/dashboard/tutor/viewReviews",
    history: "/dashboard/tutor/history",
  };

  const studentRoutes = {
    overview: "/dashboard/Students/dashboardOverview",
    profile: "/dashboard/Students/editProfile",
    bookings: "/dashboard/Students/mybooking",
  };

  return (
    <DropdownMenu>
      {/* Avatar */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full p-0"
        >
          <Avatar>
            <AvatarImage
              src={
                user?.image ||
                "https://github.com/shadcn.png"
              }
              alt={user?.name || "User"}
            />

            <AvatarFallback>
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown */}
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-[99999] w-56"
      >
        <DropdownMenuGroup>

          {/* Dashboard Overview */}
          <DropdownMenuItem
            onClick={() =>
              userNavigation(
                isTutor
                  ? tutorRoutes.overview
                  : studentRoutes.overview
              )
            }
            className="cursor-pointer"
          >
            <LayoutDashboardIcon />
            Dashboard
          </DropdownMenuItem>

          {/* Profile */}
          <DropdownMenuItem
            onClick={() =>
              userNavigation(
                isTutor
                  ? tutorRoutes.profile
                  : studentRoutes.profile
              )
            }
            className="cursor-pointer"
          >
            <UserIcon />
            Profile
          </DropdownMenuItem>

          {isTutor ? (
            <>
              {/* My Sessions */}
              <DropdownMenuItem
                onClick={() =>
                  userNavigation(tutorRoutes.sessions)
                }
                className="cursor-pointer"
              >
                <CalendarCheckIcon />
                My Sessions
              </DropdownMenuItem>

              {/* Availability */}
              <DropdownMenuItem
                onClick={() =>
                  userNavigation(tutorRoutes.availability)
                }
                className="cursor-pointer"
              >
                <Clock3Icon />
                Availability
              </DropdownMenuItem>

              {/* Reviews */}
              <DropdownMenuItem
                onClick={() =>
                  userNavigation(tutorRoutes.reviews)
                }
                className="cursor-pointer"
              >
                <StarIcon />
                My Reviews
              </DropdownMenuItem>

              {/* History */}
              <DropdownMenuItem
                onClick={() =>
                  userNavigation(tutorRoutes.history)
                }
                className="cursor-pointer"
              >
                <HistoryIcon />
                History
              </DropdownMenuItem>
            </>
          ) : (
            <>
              {/* Student Bookings */}
              <DropdownMenuItem
                onClick={() =>
                  userNavigation(studentRoutes.bookings)
                }
                className="cursor-pointer"
              >
                <CalendarCheckIcon />
                My Bookings
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Sign Out */}
        <DropdownMenuItem
          onClick={logOutFunction}
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}