"use client";

import Link from "next/link";
import {   LayoutDashboard,
  UserPen,
  CalendarCheck,
  BookOpen,
  Clock,
  Star,
  Users,
  FolderKanban,
  House, } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import { logOutUser } from "@/src/services/authService";

export function AppSidebar() {
  const { user, loading, clearAuth  } = useAuth();

      const router = useRouter();
      const logOutFunction = async () => {
        await logOutUser(); // cler cookie
        clearAuth(); // clear context
        router.push("/login"); // redirect
      };

  if(loading) {
    return <div>Loading...</div>
  }

  const studentLinks = [
    {
      title: "Overview",
      href: "/dashboard/Students/dashboardOverview",
      icon: LayoutDashboard,
    },
    {
      title: "Edit Profile",
      href: "/dashboard/Students/editProfile",
      icon: UserPen,
    },
    {
      title: "My Booking",
      href: "/dashboard/Students/mybooking",
      icon: CalendarCheck,
    },
    {
      title: "Book a Session",
      href: "/dashboard/Students/bookSession",
      icon: BookOpen,
    },
  ];

  const tutorLinks = [
    {
      title: "Tutor Dashboard",
      href: "/dashboard/tutor/dashboardOverview",
      icon: LayoutDashboard,
    },
    {
      title: "Tutor Profile",
      href: "/dashboard/tutor/editProfile",
      icon: UserPen,
    },
    {
      title: "My Sessions",
      href: "/dashboard/tutor/mySession",
      icon: BookOpen,
    },
    {
      title: "Set Availability",
      href: "/dashboard/tutor/setAvailability",
      icon: Clock,
    },
    {
      title: "View Reviews",
      href: "/dashboard/tutor/viewReviews",
      icon: Star,
    },
  ];

  const adminLinks = [
    {
      title: "Admin Dashboard",
      href: "/dashboard/admin/dashboardOverview",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Users",
      href: "/dashboard/admin/manageUsers",
      icon: Users,
    },
    {
      title: "All Bookings",
      href: "/dashboard/admin/allBooking",
      icon: CalendarCheck,
    },
    {
      title: "Manage Categories",
      href: "/dashboard/admin/manageCategories",
      icon: FolderKanban,
    },
  ];


  let links = [];

  if(user?.role === "STUDENT") {
    links = studentLinks;
  }

  if(user?.role === "TUTOR") {
    links = tutorLinks;
  }

  if(user?.role === "ADMIN") {
    links = adminLinks;
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">

                  <House />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* user buttons */}

          
          {
            links.map((link)=> (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton asChild>
                  <Link href={link.href}>
                  <link.icon />
                  <span>{link.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))
          }

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
    
                <button onClick={logOutFunction}>
                  <House />
                  <span>Log out</span>
                </button>

              </SidebarMenuButton>
            </SidebarMenuItem>










            {/* <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <LayoutDashboard />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard/Students/dashboardOverview">
                  <User />
                  <span>Student Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard/tutor/dashboardOverview">
                  <User />
                  <span>Tutor Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard/admin/dashboardOverview">
                  <User />
                  <span>Admin Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard/booking">
                  <CalendarCheck />
                  <span>Bookings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem> */}





          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
