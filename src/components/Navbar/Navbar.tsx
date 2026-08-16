"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/src/context/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import UserDashboard from "./NavbarComponents/userDashboard";

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    closeMobileMenu();

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navLinks = [
    {
      label: "Home",
      type: "section",
      target: "home",
    },
    {
      label: "How It Works",
      type: "section",
      target: "how-it-works",
    },
    {
      label: "Reviews",
      type: "section",
      target: "reviews",
    },
    {
      label: "For Tutors",
      type: "section",
      target: "for-tutors",
    },
    {
      label: "Why Us",
      type: "section",
      target: "why-skillbridge",
    },
    {
      label: "Find Tutors",
      type: "route",
      target: "/tutors",
    },
  ];

  return (
    <nav className="sticky top-0 z-[9999] w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="text-xl font-bold tracking-tight text-blue-500"
        >
          Skill<span className="text-gray-900">Bridge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.label}
                href={link.target}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-500"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-500"
              >
                {link.label}
              </button>
            ),
          )}
        </div>

        {/* Desktop Auth */}
        {/* Hidden until lg so tablet doesn't show the avatar */}
        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <UserDashboard />
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-500"
              >
                Login
              </Link>

              <Link href="/register">
                <Button className="rounded-full px-5">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile + Tablet Menu Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="rounded-lg p-2 text-gray-700 transition-all duration-200 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="relative h-6 w-6">
            <Menu
              className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                mobileMenuOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <X
              className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                mobileMenuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile + Tablet Navigation */}
      <div
        className={`grid overflow-hidden border-t border-gray-100 bg-white shadow-lg transition-all duration-300 ease-out lg:hidden ${
          mobileMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="px-4 pb-5 pt-3 sm:px-6">

            {/* Navigation Links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <Link
                    key={link.label}
                    href={link.target}
                    onClick={closeMobileMenu}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-blue-500"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.target)}
                    className="rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-blue-500"
                  >
                    {link.label}
                  </button>
                ),
              )}
            </div>

            {/* Mobile + Tablet Auth */}
            <div className="mt-3 border-t border-gray-100 pt-4">
              {user ? (
                <div className="px-4">
                  <UserDashboard />
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={closeMobileMenu}
                  >
                    <Button className="w-full rounded-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}