"use client"
import { useAuth } from "@/src/context/AuthContext";
import {
  UserIcon,
  CalendarCheckIcon,
  LayoutDashboardIcon,
  LogOutIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { logOutUser } from "@/src/services/authService";

export default function UserDashboard () {
  const { user, clearAuth } = useAuth();

    const router = useRouter();
    const logOutFunction = async () => {
      await logOutUser(); // cler cookie
      clearAuth(); // clear context
      router.push("/login"); // redirect
    };



  return (
    <DropdownMenu>
<DropdownMenuTrigger asChild>
  <Button variant="ghost" size="icon" className="rounded-full">
    <Avatar>
      <AvatarImage
        src={user?.image ? user?.image : "https://github.com/shadcn.png"}
        alt="shadcn"
      />
      <AvatarFallback>LR</AvatarFallback>
    </Avatar>
  </Button>
</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CalendarCheckIcon />
            Booking
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LayoutDashboardIcon />
            Dashboard
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logOutFunction}>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

}