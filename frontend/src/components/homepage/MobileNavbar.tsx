"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

import { useSession } from "@/lib/auth-client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/UserButton";

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
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

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
            {session ? (
              <UserButton />
            ) : (
              <div className="flex flex-col gap-2">
                <Button className="" variant={"secondary"}>
                  <Link href={"login"}>Log in</Link>
                </Button>
                <Button>
                  <Link href={"/sign-up"}>Sign up</Link>
                </Button>
              </div>
            )}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
