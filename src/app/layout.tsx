'use client'
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import AuthProvider from "../context/AuthContext"
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});



const queryClient = new QueryClient();



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.className} h-full`}>
      <body className="min-h-full flex flex-col">
            <QueryClientProvider client={queryClient}>

        <AuthProvider>
        <TooltipProvider>
        <NavbarWrapper />
        {children}
           <Toaster />
        </TooltipProvider>
        </AuthProvider>
            </QueryClientProvider>
      </body>
    </html>
  );
}
