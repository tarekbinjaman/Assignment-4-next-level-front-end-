"use client";

import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 border-t border-gray-200 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">

        {/* ================= CTA ================= */}
        <div className="mb-16 overflow-hidden rounded-3xl bg-gray-900 px-6 py-10 sm:px-10 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <span className="text-sm font-semibold text-blue-400">
                  SkillBridge
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to share your knowledge?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                Join SkillBridge and connect with learners who are
                looking for your skills, experience, and guidance.
              </p>
            </div>

            <Link
              href="/register"
              className="group flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-blue-500 hover:text-white"
            >
              Become a Tutor

              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ================= FOOTER CONTENT ================= */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-blue-500"
            >
              Skill<span className="text-gray-900">Bridge</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              A platform that connects learners with skilled tutors,
              making it easier to learn, teach, and grow together.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="h-4 w-4 text-blue-500" />

                <a
                  href="mailto:hello@skillbridge.com"
                  className="transition-colors hover:text-blue-500"
                >
                  hello@skillbridge.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin className="h-4 w-4 text-blue-500" />

                <span>Chattogram, Bangladesh</span>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <FaFacebook className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <FaTwitter className="h-4 w-4" />
              </a>

            </div>
          </div>

          {/* ================= PLATFORM ================= */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Platform
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  How It Works
                </button>
              </li>

              <li>
                <Link
                  href="/tutors"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  Find Tutors
                </Link>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  Learner Reviews
                </button>
              </li>

            </ul>
          </div>

          {/* ================= FOR TUTORS ================= */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              For Tutors
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <button
                  onClick={() => scrollToSection("for-tutors")}
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  Become a Tutor
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("tutor-guide")}
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  Getting Started
                </button>
              </li>

              <li>
                <Link
                  href="/register"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  Create Account
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  Tutor Login
                </Link>
              </li>

            </ul>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <button
                  onClick={() => scrollToSection("why-skillbridge")}
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  Why SkillBridge
                </button>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <a
                  href="mailto:hello@skillbridge.com"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  Contact
                </a>
              </li>

              <li>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-blue-500"
                >
                  Sign In

                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-14 flex flex-col gap-5 border-t border-gray-200 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SkillBridge. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">

            <Link
              href="#"
              className="text-xs text-gray-400 transition-colors hover:text-gray-700"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-xs text-gray-400 transition-colors hover:text-gray-700"
            >
              Terms of Service
            </Link>

            <Link
              href="#"
              className="text-xs text-gray-400 transition-colors hover:text-gray-700"
            >
              Cookie Policy
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}