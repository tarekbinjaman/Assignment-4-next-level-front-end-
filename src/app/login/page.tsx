import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter

} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  return (
    <div className="flex justify-center mt-40 ">
    <Card className="w-full max-w-sm">

<CardContent>
  <div className="flex flex-col gap-2">
  <h3 className="text-4xl font-sans">Welcome back</h3>
<p className="text-lg text-gray-400 font-sans">Please enter your details</p>
  </div>
  <form className="mt-4">
    <div className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
        </div>

        <Input id="password" type="password" required />
      </div>
    </div>
  </form>
</CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
    </div>
  );
}
