import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full border-b px-6 py-4 flex items-center justify-between">
            {/* logo */}
            <Link href="/" className="text-blue-500 font-bold" >Skill Bridge</Link>

            {/* Navigation */}
            <div className="flex gap-4 items-center">
                <Link href="/">Home</Link>
                <Link href="/courses">Courses</Link>
                <Link href="/tutors">Tutors</Link>
                <Link href="/about">About</Link>
            </div>

            {/* Auth */}
        <div>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </div>
        </nav>
    )
}