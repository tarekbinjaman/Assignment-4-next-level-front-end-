"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/src/context/AuthContext";
import api, { logOutUser } from "@/src/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, clearAuth } = useAuth();
  const router = useRouter();
  const logOutFunction = async () => {
    await logOutUser(); // cler cookie
    clearAuth(); // clear context
    router.push("/login"); // redirect
  };
  const getUser = async() => {
    const getUserData = await api.get("/user/me")
    console.log(getUserData)
  }
  return (
    <nav className="w-full border-b px-6 py-4 flex items-center justify-between">
      {/* logo */}
      <Link href="/" className="text-blue-500 font-bold">
        Skill Bridge
      </Link>

      {/* Navigation */}
      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/tutors">Tutors</Link>
        <Link href="/about">About</Link>
      </div>

      {/* Auth */}
      <div>
        {user ? (
          <>
            <p>{user?.name}</p>
            <Button onClick={logOutFunction}>Logout</Button>
          </>
        ) : (
            <>
            <Button onClick={getUser}>Get user!</Button>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
