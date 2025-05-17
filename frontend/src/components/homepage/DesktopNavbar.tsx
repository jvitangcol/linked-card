"use client";

import Link from "next/link";

import { useSession } from "@/lib/auth-client";
import MenuBar from "@/components/homepage/Menubar";
import { Button } from "@/components/ui/button";
import UserButton from "../UserButton";

export default function DesktopNavbar() {
  const { data: session } = useSession();

  return (
    <div className="hidden md:block">
      <div className="flex gap-8">
        <MenuBar className="flex gap-2" />

        {session ? (
          <UserButton />
        ) : (
          <div className="flex gap-2">
            <Button className="" variant={"secondary"}>
              <Link href={"/auth/login"}>Log in</Link>
            </Button>
            <Button>
              <Link href={"/auth/sign-up"}>Sign up</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
