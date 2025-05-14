import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MobileNavbar() {
  return (
    <div className="md:hidden">
      <Sheet>
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
            <Link href={"/"}>Home</Link>
            <Link href={"#about"}>About</Link>
            <Link href={"#features"}>Features</Link>
          </nav>
          <div className="flex flex-col gap-2 mx-5">
            <Button className="" variant={"secondary"}>
              <Link href={"login"}>Log in</Link>
            </Button>
            <Button>
              <Link href={"/sign-up"}>Sign up</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
