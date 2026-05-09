import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/src/components/dashboard/appsidebar";
import React from "react";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <main className="flex-1 p-6">
          <SidebarTrigger />

          {children}
        </main>
      </div>
    </SidebarProvider>
    )
}
