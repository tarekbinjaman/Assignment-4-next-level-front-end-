"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/src/context/AuthContext";
import { loginUser, registerUser } from "@/src/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"
export default function Registration() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {fetchUser} = useAuth();

  const router = useRouter();

  // submit function
  const handleSubmit = async(e) => {
    e.preventDefault();

    const formatData = {
      name,
      email,
      password,
      role,
    };

    try {
      // 1. register user
      await registerUser(formatData);

      // 2. auto login
      await loginUser({email, password});

      // 3. get user into context
      await fetchUser()

      // 4. redirect
      router.push("/")

    } catch(err) {
      console.log(err)
      toast.error("Registration failed")
    }
  };
  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <Card className="w-full max-w-sm">
          <CardContent className="p-0">
            <div className="">
            <div>
                          {/* logo */}
              <h1 className="text-4xl text-blue-400 text-center font-extrabold my-8">
                Skill Bridge
              </h1>
            </div>
            <div className="flex flex-col gap-2 px-3">
              <h3 className="text-2xl font-bold">Create account</h3>
              <p className="text-lg text-gray-400 font-semibold">
                Please enter your details
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="px-3">
                {/* form all input fields */}
              
              <div className="flex flex-col gap-6">
               
                  {/* Name */}
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    placeholder="enter your name"
                    required
                  />
                </div>

                  {/* Role */}
                <div className=" ">
                  {/* <Label htmlFor="email">Select role</Label> */}
                  <select
                    className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm text-gray-900 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Select role</option>
                    <option value="TUTOR">Tutor</option>
                    <option value="STUDENT">Student</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  {/* Email */}
                  <Label htmlFor="email">Email</Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="m@example.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  {/* Password */}
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>

                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                  />
                </div>
              </div>
              <div className="mt-2">
                <p className="">
                  Already have an account?{" "}
                  <Link className="underline" href={"/login"}>
                    Login now!
                  </Link>{" "}
                </p>
              </div>
              </div>
          <CardFooter className="mt-3">
            <Button className="w-full">
              Register
            </Button>
          </CardFooter>
            </form>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
