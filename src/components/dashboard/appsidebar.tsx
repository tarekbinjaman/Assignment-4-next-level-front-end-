"use client";

import Link from "next/link";
import { LayoutDashboard, User, CalendarCheck } from "lucide-react";

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

export function AppSidebar() {
  const { user } = useAuth();

  const studentLinks = [
    {
      title: "Student Dashboard",
      href: "/dashboard/Students/dashboardOverview",
      icon: LayoutDashboard,
    },
    {
      title: "Edit Profile",
      href: "/dashboard/Students/editProfile",
      icon: LayoutDashboard,
    },
    {
      title: "My Booking",
      href: "/dashboard/Students/mybooking",
      icon: LayoutDashboard,
    },
    {
      title: "Book a Session",
      href: "/dashboard/Students/bookSession",
      icon: LayoutDashboard,
    },
  ];

  const tutorLinks = [
    {
      title: "Tutor Dashboard",
      href: "/dashboard/tutor/dashboardOverview",
      icon: LayoutDashboard,
    },
    {
      title: "Edit Profile",
      href: "/dashboard/tutor/editProfile",
      icon: LayoutDashboard,
    },
    {
      title: "My Sessions",
      href: "/dashboard/tutor/mySession",
      icon: LayoutDashboard,
    },
    {
      title: "Set Availability",
      href: "/dashboard/tutor/setAvailability",
      icon: LayoutDashboard,
    },
    {
      title: "View Reviews",
      href: "/dashboard/tutor/viewReviews",
      icon: LayoutDashboard,
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
      icon: LayoutDashboard,
    },
    {
      title: "All Bookings",
      href: "/dashboard/admin/allBooking",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Categories",
      href: "/dashboard/admin/manageCategories",
      icon: LayoutDashboard,
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
                  <LayoutDashboard />
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
