"use client";

import Link from "next/link";
import { LogOut, Moon, Settings, SquareMenu, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  // We can use useSidebar hook to toggle the sidebar if we want to create a custom button instead of using SidebarTrigger component
  //   const { toggleSidebar } = useSidebar();

  return (
    <nav className="flex justify-between items-center p-4 sticky top-0 bg-background z-10">
      <SidebarTrigger className="cursor-pointer" />
      {/* <Button variant="outline" onClick={toggleSidebar}>
        Custom Button
      </Button> */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/20210121" />
              <AvatarFallback>SL</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

//<DropdownMenu>
//  {/* Use asChild to wrap the Button in a parent Button. By default Shadcn creates a button when we add DropdownMenuTrigger */}
//  <DropdownMenuTrigger asChild>
//    <Button variant="outline" size="icon">
//     <SquareMenu />
//    {/* Screen reader only text for people who use assistive technologies */}
//  <span className="sr-only">Open menu</span>
// </Button>
//</DropdownMenuTrigger>
//<DropdownMenuContent>
// <DropdownMenuLabel>My Account</DropdownMenuLabel>
//<DropdownMenuSeparator />
//<DropdownMenuItem>Profile</DropdownMenuItem>
//<DropdownMenuItem>Billing</DropdownMenuItem>
//<DropdownMenuItem>Team</DropdownMenuItem>
//<DropdownMenuItem>Subscription</DropdownMenuItem>
//</DropdownMenuContent>
//</DropdownMenu>;
