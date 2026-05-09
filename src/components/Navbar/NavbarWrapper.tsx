'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar'; // Adjust this import path as needed

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Define all path prefixes where the navbar should be hidden
  const hiddenNavbarPaths = [
    '/dashboard',
    '/login',
    '/register',
    // add other paths here, e.g., '/auth', '/login'
  ];

  const shouldHideNavbar = hiddenNavbarPaths.some(path => pathname?.startsWith(path));

  // Render nothing if the navbar should be hidden
  if (shouldHideNavbar) {
    return null;
  }

  // Otherwise, render the standard Navbar
  return <Navbar />;
}