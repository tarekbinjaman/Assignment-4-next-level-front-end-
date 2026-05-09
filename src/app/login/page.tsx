"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter

} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/src/context/AuthContext";
import { loginUser } from "@/src/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {fetchUser} = useAuth();

  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      // 1. login > set cookie
      await loginUser({email, password});

      // 2. get real user
      await fetchUser();

      // 3. redirect
      router.push("/")
    } catch(err) {
      console.log("Error from login form", err)
    }
  }
  return (
    <div className="flex justify-center mt-40 ">
    <Card className="w-full max-w-sm">

<CardContent className="p-0">
  {/* logo */}
  <div>
    <h1 className="text-4xl text-blue-400 text-center font-extrabold my-8">Skill Bridge</h1>
  </div>
  <div className="flex flex-col gap-2 px-3">
  <h3 className="text-2xl font-bold">Welcome back</h3>
<p className="text-lg text-gray-400 font-semibold">Please enter your details</p>
  </div>
  <form onSubmit={handleSubmit} className="mt-4">
    <div className="px-3">
    {/* In this div all text and input fields */}

    <div>
      {/* In this di all input fields */}
    <div className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="m@example.com" required />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
        </div>

        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
      </div>
    </div>
    </div>
    {/* In here text things like register now! */}
  <div className="mt-2">
  <p className="">New here? <Link className="underline" href={"/register"}>Register now!</Link> </p>
  </div>
    </div>

    <div>
      {/* In this div card footer and other button for login with google */}
      <CardFooter className="flex-col gap-2 mt-3">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </CardFooter>
    </div>
  </form>
  
</CardContent>
    </Card>
    </div>
  );
}
