"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  const hiddenFooterPaths = [
    "/dashboard",
    "/login",
    "/register",
  ];

  const shouldHideFooter = hiddenFooterPaths.some((path) =>
    pathname?.startsWith(path)
  );

  if (shouldHideFooter) {
    return null;
  }

  return <Footer />;
}