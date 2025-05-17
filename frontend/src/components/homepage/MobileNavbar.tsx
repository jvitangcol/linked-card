"use client";

import Link from "next/link";
import { MenuIcon, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const links = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "#about",
  },
  {
    name: "FEATURES",
    href: "#features",
  },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link href={"/"} className="font-semibold text-2xl">
                <span className="">Link</span>
                <span>Card</span>
              </Link>
            </SheetTitle>
            <SheetDescription>You can now share easily share</SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col mx-5">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                >
                  <span className="font-semibold">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <SheetFooter>
            <div className="flex flex-col gap-2">
              <Button className="" variant={"secondary"}>
                <Link href={"/auth/login"}>Log in</Link>
              </Button>
              <Button>
                <Link href={"/auth/sign-up"}>Sign up</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="w-full">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
