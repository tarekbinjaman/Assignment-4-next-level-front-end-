import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/src/components/dashboard/app-sidebar";
import React from "react";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <SidebarProvider>
                
            </SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}
